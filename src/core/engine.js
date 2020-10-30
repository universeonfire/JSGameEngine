import Renderer from "./renderer";
import * as Planck from "planck-js";

export default class Engine{
    renderer = new Renderer();
    world = new Planck.World();
    constructor(canvas){
        this.renderer = new Renderer(canvas);
        this.world = new Planck.World(new Planck.Vec2(0,0));

    }
    start = () => {
        console.log("engine initiated");
    }
}