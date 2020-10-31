import {WebGLRenderer,Color} from "three";

export default class Renderer {

    clearColor = new Color(0xF30101);
    constructor(canvas){
        this.webGlRenderer = new WebGLRenderer({canvas});
        this.webGlRenderer.setClearColor(this.clearColor);
        this.windowResize();
    }

    windowResize = (w,h) => {
        this.webGlRenderer.setSize(w,h);
        //console.log("renderer size:", this.webGlRenderer.getSize())
    }

    update = (dtime) => {
        this.webGlRenderer.clear();
        console.log("render color:",this.webGlRenderer.getClearColor());
        console.log("renderer size:", this.webGlRenderer.getSize());
    }
}

