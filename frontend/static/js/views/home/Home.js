import AbstractView from '../AbstractView.js';
import Particle from './particle.js';

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle('Home');
        this.canvasRatio = 0.5;
    }

    getHtml = async () => {
        return fetch('http://d6cibru4nqeka.cloudfront.net/html/home.html')
        .then((response) => {
            return response.text();
        });
    }


    init = () => {
        this.canvas = document.querySelector('.canvas');
        this.ctx = this.canvas.getContext('2d');
        this.pixels = [];
        this.imageRatio = 1;
        this.circleSize = 10;
        this.distanceLimit = 100;
        this.mouseSize = 50;
        this.speedRatio = 1;

        this.isPlaying = false;

        this.img = new Image();
    }
    setImage = () => {
        this.img.src = '/static/images/home.png';
        // this.img.onload = this.drawImage;
        this.img.addEventListener('load', this.drawImage);
    }
    drawImage = () => {
        this.imageRatio = this.canvas.width / this.img.width * 0.65;
        this.startX = Math.floor(this.canvas.width/2 - this.img.width*this.imageRatio/2);
        this.startY = Math.floor(this.canvas.height/2 - this.img.height*this.imageRatio/2);
        this.ctx.drawImage(this.img, this.startX, this.startY , this.img.width * this.imageRatio , this.img.height * this.imageRatio );
        
        if ("ontouchstart" in document.documentElement) {
            
            return;
        }
        this.getImageData();
    }
    getImageData = () => {
        const imageData = this.ctx.getImageData(0, 0, this.img.width, this.img.height ).data;
        
        for (let i = 0; i < imageData.length / (4 * this.circleSize); i++) {
            if (imageData[i * 4 * this.circleSize] === 0) continue;

            const x = (i * this.circleSize) % this.img.width;
            const y = Math.floor((i * this.circleSize) / this.img.width);
            this.pixels.push(new Particle({
                x: x,
                y: y,
                r: imageData[i * 4 * this.circleSize],
                g: imageData[i * 4  * this.circleSize+ 1],
                b: imageData[i * 4  * this.circleSize+ 2],
                a: imageData[i * 4  * this.circleSize+ 3],
            }, this.distanceLimit, this.speedRatio));
        }
        
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.animate();
    }

    animate = () => {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.pixels.forEach(pixel => {
            pixel.setSpeed(this.mouseX, this.mouseY, this.circleSize, this.mouseSize);
            pixel.draw(this.ctx, this.circleSize);
        });
        window.requestAnimationFrame(this.animate);
    }

    resizeWindow = () => {
        
        // this.canvas.width = this.canvasWidth;
        this.canvas.width = window.innerWidth * 0.9;
        
        if ("ontouchstart" in document.documentElement) {
            console.log('ontouch');
            this.canvas.width *= 2;
            this.canvas.height = this.canvas.width * this.canvasRatio;
            this.canvas.style.width = `${this.canvas.width/2}px`;
            this.canvas.style.height = `${this.canvas.height/2}px`;
            return;
            this.circleSize = 2;
            this.distanceLimit = 50;
            this.mouseSize = 25;    
            this.canvasRatio = 0.6;
            this.speedRatio = 1;
        } else if (window.innerWidth < 420) {
            this.circleSize = 6;
            this.distanceLimit = 50;
            this.mouseSize = 25;    
            this.canvasRatio = 0.6;
            this.speedRatio = 0.8;
        } else if (window.innerWidth < 750) {
            this.circleSize = 10;
            this.distanceLimit = 100;
            this.mouseSize = 50;
            this.canvasRatio = 0.6;
            this.speedRatio = 1;
        } else if (window.innerWidth < 1024) {
            this.circleSize = 10;
            this.distanceLimit = 100;
            this.mouseSize = 50;
            this.canvasRatio = 0.5;
            this.speedRatio = 1;
        } else {
            this.canvas.width = 1024 * 0.9;
            this.circleSize = 10;
            this.distanceLimit = 100;
            this.mouseSize = 50;
            this.canvasRatio = 0.5;
            this.speedRatio = 1;
        }
        
        this.canvas.height = this.canvas.width * this.canvasRatio;
        this.canvas.style.width = `${this.canvas.width}px`;
        this.canvas.style.height = `${this.canvas.height}px`;

        const canvasRect = this.canvas.getBoundingClientRect();
        this.canvasX = canvasRect.x;
        this.canvasY = canvasRect.y;
        
        this.mouseX = 4000;
        this.mouseY =  4000;
        this.pixels = [];

    }
    setIsPlaying = (param) => {
        this.isPlaying = param;
    }
    setMouseLocation = (x, y) => {
        this.mouseX = x - this.canvasX;
        this.mouseY = y - this.canvasY;
    }


}

