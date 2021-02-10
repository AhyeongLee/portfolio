import AbstractView from '../AbstractView.js';
import Particle from './particle.js';

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle('Home');
        this.canvasWidth = 1000;
    }

    getHtml = async () => {
        return `
            <div class="hello">
                <h1>Hello, this is Ahyeong</h1>
                <h2>Welcome to my portfolio!</h2>
            </div>
            <canvas class="canvas"></canvas>
            <div class="descriptions">
                <p>I'm a front-end web developer who can handle CI/CD process and AWS.</p>
                <p>The icons shown above are the skills I have learned and experienced.</p>
            </div>
        `;
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
        console.log('setIamge');
        this.img.src = '/static/images/home.png';
        this.img.onload = this.drawImage;
    }
    drawImage = () => {
        console.log('drawImage');
        this.imageRatio = this.canvas.width / this.img.width * 0.65;
        this.startX = Math.floor(this.canvas.width/2 - this.img.width*this.imageRatio/2);
        this.startY = Math.floor(this.canvas.height/2 - this.img.height*this.imageRatio/2);
        this.ctx.drawImage(this.img, this.startX, this.startY , this.img.width * this.imageRatio , this.img.height * this.imageRatio );
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
            }, this.distanceLimit));
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
        this.canvas.width = this.canvasWidth;
        this.canvas.height = this.canvas.width * 0.5;
        this.canvas.style.width = `${this.canvas.width}px`;
        this.canvas.style.height = `${this.canvas.height}px`;

        const canvasRect = this.canvas.getBoundingClientRect();
        this.canvasX = canvasRect.x;
        this.canvasY = canvasRect.y;
        
        this.mouseX = 4000;
        this.mouseY =  4000;
        this.pixels = [];

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.setImage();
    }


}

