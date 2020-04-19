class Brick {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.w = 60;
        this.h = 16;
    }

    show() {
        rect(this.x, this.y, this.w, this.h);
    }

    delete() {
        for(let i = 0; i < bricks.length; i++) {
            if(ball.checkCollide(bricks[i])) {
                bricks.splice(i, 1);
            }
        }
    }
}