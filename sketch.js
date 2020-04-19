let player;

let ball;

let bricks = [];

function setup() {
    // canvas
    createCanvas(600, 500);

    // player
    player = new Player();

    // ball
    ball = new Ball();

    // bricks
    for(let i = 0; i < 8; i++) {
        for(let j = 0; j < 6; j++) {
            let brick = new Brick(50 + i * 100, 50 + j * 50);
            bricks.push(brick);
        }
    }
}

function draw() {
    // background
    background(51);

    // player
    player.move();
    player.show();

    // ball
    ball.move();
    ball.collide();
    ball.show();

    // bricks
    for(let i = 0; i < bricks.length; i++) {
        bricks[i].show();
        bricks[i].delete();
    }
}

