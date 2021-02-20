export default class Particle {
    constructor(pixel, limit, speedRatio) {
        this.originX = pixel.x;
        this.originY = pixel.y;
        this.x = pixel.x;
        this.y = pixel.y;
        this.r = pixel.r;
        this.g = pixel.g;
        this.b = pixel.b;
        this.a = pixel.a;
        this.dx = 0;
        this.dy = 0;
        this.limit = limit;
        this.speed = this.getRandomArbitrary(30*speedRatio, 45*speedRatio);
        this.speedRatio = speedRatio;
    }

    setSpeed(mouseX, mouseY, circleSize, mouseSize) {
        let dx = this.x - mouseX;
        let dy = this.y - mouseY;
        let distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < this.limit) {
            this.dx = dx / distance * this.speed;
            this.dy = dy / distance * this.speed;
        } else {
            this.dx = 0;
            this.dy = 0;
        }
        if (distance > mouseSize + circleSize) {
            if (this.x !== this.originX) {
                this.dx = this.speedRatio * (this.originX - this.x)/5;
            }
            if (this.y !== this.originY) {
                this.dy = this.speedRatio * (this.originY - this.y)/5;
            }
            
        }

    }
    draw(ctx, size) {
        this.x += this.dx;
        this.y += this.dy;
        ctx.beginPath();
        ctx.arc(this.x, this.y, size/2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
        ctx.fill();
    }

    clearSpeed() {
        this.dx = 0;
        this.dy = 0;
        this.x = this.originX;
        this.y = this.originY;
    }

    getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }
}