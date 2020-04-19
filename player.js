class Player {

   constructor() {
       this.x = width / 2;
       this.y = height - 70;
       this.w = 100;
       this.h = 16;
       this.speed = 4;
   }

   show() {
       noStroke();
       rectMode(CENTER);
       rect(this.x, this.y, this.w, this.h);
   }

   move() {
        if(keyIsDown(LEFT_ARROW)) {
            this.x -= this.speed;
        }
        if(keyIsDown(RIGHT_ARROW)) {
            this.x += this.speed;
        }
   }
}