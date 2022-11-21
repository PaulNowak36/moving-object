const canvas = document.querySelector('canvas');

const ctx = canvas.getContext('2d');

const cw = canvas.width;
const ch = canvas.height;


class Burger {
    image = null;
    rect = {};

    constructor(w, h, source) {
        this.w = w;
        this.h = h;

        this.x = 0;
        this.y = (ch - this.h) / 2;        

        this.image = new Image();
        this.image.src = source;
        this.image.addEventListener('load', () => {
            this.drawImage();
        });
    }

    saveRect() {
        this.rect = {
            x: this.x, y: this.y, w: this.w, h: this.h
        };
    }

    drawImage() {
        ctx.canvas
        ctx.clearRect(this.rect.x, this.rect.y, this.rect.w, this.rect.h);
        ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
    }

    moveRight() {
        this.saveRect();
        this.x += 2;
        if (this.x >= (cw- this.w)) {
            this.x -= 2;
        }
        
    }

    moveLeft() {
        this.saveRect();
        this.x -= 2;
        if (this.x < 0) {
            this.x += 2;
        }
    }

    moveDown() {
        this.saveRect();
        this.y += 2;
    }

    moveUp() {
        this.saveRect();
        this.y -= 2;
    }

    increase () {
        this.saveRect();
        this.w += 2;
        this.h += 2;
    }

    decrease () {
        this.saveRect();
        this.w -= 2;
        this.h -= 2;
    }
}

const burger = new Burger(100, 100, 'food.jpg');
document.addEventListener('keydown', e =>{
    if (e.key ==='ArrowRight') {
        burger.moveRight();
    }
    if (e.key ==='ArrowLeft') {
        burger.moveLeft();
    }
    if (e.key ==='ArrowUp') {
        burger.moveUp();
    }
    if (e.key ==='ArrowDown') {
        burger.moveDown();
    }
    if (e.key ==='a') {
        burger.increase();
    }
    if (e.key ==='z') {
        burger.decrease();
    }
    burger.drawImage();

});







