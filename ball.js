class Ball {
    constructor() {
        this.x = player.x;
        this.y = player.y - 8;
        this.xSpeed = 3;
        this.ySpeed = 4;
    }

    show() {
        ellipse(this.x, this.y, 16, 16);
    }

    move() {
        this.x += this.xSpeed;
        this.y -= this.ySpeed;
    }

    collide() {
        // wall collision
        if(this.x > width || this.x < 0) {
            this.xSpeed = this.xSpeed * -1;
        } else if(this.y < 0 || this.y > height) {
            this.ySpeed = this.ySpeed * -1;
        }

        // player collision
        if(this.checkCollide(player)) {
            this.ySpeed = this.ySpeed * -1;
        }

        for(let i = 0; i < bricks.length; i++) {
            if(this.checkCollide(bricks[i])) {
                this.ySpeed = this.ySpeed * -1;
            }
        }
    }

    checkCollide(item) {
        if(this.x > item.x - item.w / 2 && this.y > item.y - item.h / 2 && this.x < item.x + item.w / 2 && this.y < item.y + item.h / 2) {
           return true;
        }
    }
}