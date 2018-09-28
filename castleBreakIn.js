import { game, Sprite } from "./sgc/sgc.js";
game.setBackground("grass.png");

class Wall extends Sprite {
    constructor(x, y, name, image) {
        super();
        this.x = x;
        this.y = y;
        this.name = name;
        this.setimage("image");
        this.accelerateOnBounce = false;

    }
}
new Wall(0, 0, "A spooky castle wall", "castle.png");
this.x = 0;
this.y = 0;
this.name = "A spooky castle wall";
this.setimage("castle.png");

let leftWall = (0, 200, "Left side wall", "wall.png");
this.x = 0;
this.y = 200;
this.name = "Left side wall";
this.setimage("wall.png");

let rightWall = (48, 200, "Right side wall", "wall.png");
this.x = 48;
this.y = 200;
this.name = "Right side wall";
this.setimage("wall.png");
