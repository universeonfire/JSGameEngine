import { Scene, Mesh, MeshBasicMaterial, PlaneGeometry} from "three";
import * as Planck from "planck-js";

export default class Level {
    scene;
    world;
    start = () => {
        this.world = new Planck.World(new Planck.Vec2(0,0));
        this.scene = new Scene();
        //geometry instance
        this.box = new PlaneGeometry(1,1,1,1); //its not a box, i know
        this.mat = new MeshBasicMaterial({ color: 0xffffcc });
        this.mesh = new Mesh(this.box, this.mat);
        this.scene.add(this.mesh);
        
    }
    getScene = () => {
        return this.scene;
    }
}