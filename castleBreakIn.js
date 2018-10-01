import { game, Sprite } from "./sgc/sgc.js";
game.setBackground("grass.png");

class Wall extends Sprite {
    constructor(x, y, name, image) {
        super();
        this.x = x;
        this.y = y;
        this.name = name;
        this.setImage(image);
        this.accelerateOnBounce = false;

    }
}
new Wall(0, 0, "A spooky castle wall", "castle.png");

let leftWall = new Wall(0, 200, "Left side wall", "wall.png");

let rightWall = new Wall(game.displayWidth - 48, 200, "Right side wall", "wall.png");

class princess extends Sprite {
    constructor() {
        super();
        this.name = "Princess Ann";
        this.setImage("ann.png");
        this.height = 48;
        this.width = 48;
        this.x = game.displayWidth / 2;
        this.y = game.displayHeight - this.height;
        this.speedWhenWalking = 150;
        this.lives = 3;
        this.accelerateOnBounce = false;
        this.defineAnimation("left", 9, 11);
        this.defineAnimation("right", 3, 5);
        this.lives = 3;
    }
    handleLeftArrowKey() {
        this.playAnimation("left");
        this.angle = 180;
        this.speed = this.speedWhenWalking;
    }
    handleRightArrowKey() {
        this.playAnimation("right");
        this.angle = 0;
        this.speed = this.speedWhenWalking;
    }
    handleCollision(otherSprite) {
        // Horizontally, Ann's image file is about one-third blank, one-third Ann, and         // one-third blank.
        // Vertically, there is very little blank space. Ann's head is about one-fourth         // the height.
        // The other sprite (Ball) should change angle if:
        // 1. it hits the middle horizontal third of the image, which is not blank, AND
        // 2. it hits the upper fourth, which is Ann's head.
        let horizontalOffset = this.x - otherSprite.x;
        let verticalOffset = this.y - otherSprite.y;
        if (Math.abs(horizontalOffset) < this.width / 3 &&
            verticalOffset > this.height / 4) {
            // The new angle depends on the horizontal difference between sprites.
            otherSprite.angle = 90 + 2 * horizontalOffset;
        }
        return false;
    }
    handleFirstGameLoop() {
        // Set up a text area to display the number of lives remaining.
        this.livesDisplay = game.createTextArea(3, 20);
        this.updateLivesDisplay();
        
    }
    updateLivesDisplay() {
        game.writeToTextArea(this.livesDisplay, "Lives = " + this.lives);
    }
}
let ann = new princess();

class Ball extends Sprite {
    constructor(x, y, name, image) {
        super();
        this.x = 390;
        this.y = 500;
        this.setImage("ball.png");
        this.height = 48;
        this.width = 48;
        this.name = Ball;
        this.defineAnimation("spin", 0, 12);
        this.speed = 40;
        this.angle = 50 + Math.random() * 80;

    }
    handlGameLoop() {
        this.speed = 40;
        if (this < 200) {
            this.speed = 40;
        }

    }

}
new Ball(360, 90, "ball", "ball.png");
