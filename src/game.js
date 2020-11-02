import { PerspectiveCamera, Vector2, MathUtils} from "three";
import * as keyboard from "keyboardjs";

import Level from "./level";

export default class Game {
    moveSpeed = 10;
    angle = 0;
    turnSpeed = 1;
    forward = false; backward = false; right = false; left = false; turnR = false; turnL = false;

    constructor(aspectRatio){
        
        this.camera = new PerspectiveCamera(50,aspectRatio,0.1,1000);
        this.camera.position.z = 10;
    }

    start = () => {
        this.level = new Level();
        this.level.start();
    }
    
    update = (dtime) => {
        let vel = new Vector2();
        //TODO
        //add turn functionality with mouse maybe?
        //add input management to its respective class if it becomes irrevelant here

        if(keyboard.on('w',()=>this.forward = true,()=>this.forward=false));
        if(keyboard.on('a',()=>this.left = true,()=>this.left = false));
        if(keyboard.on('s',()=>this.backward = true,()=>this.backward = false));
        if(keyboard.on('d',()=>this.right = true,()=>this.right = false));

        if(this.forward){
            vel.setX(-Math.sin(this.angle));
            vel.setY(-Math.cos(this.angle));
        }
        if(this.backward){
            vel.setX(Math.sin(this.angle));
            vel.setY(Math.cos(this.angle));
        }
        if(this.right){
            vel.x += Math.sin(this.angle + MathUtils.degToRad(90));
            vel.y += Math.cos(this.angle + MathUtils.degToRad(90));
        }
        if(this.left){
            vel.x += Math.sin(this.angle - MathUtils.degToRad(90));
            vel.y += Math.cos(this.angle - MathUtils.degToRad(90));
        }

        if(this.turnR) this.angle -= (dtime * this.turnSpeed);
        if(this.turnL) this.angle += (dtime * this.turnSpeed);

        vel.normalize();
        vel.x *= this.moveSpeed * dtime;
        vel.y *= this.moveSpeed * dtime;

        this.camera.position.x += vel.x;
        this.camera.position.z += vel.y;
        this.camera.rotateY(this.angle);
    }

    getLevel = () => {
        return this.level;
    }

    getCamera = () => {
        return this.camera;
    }

     
}