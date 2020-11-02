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
    }

    update = (dtime) => {
        this.webGlRenderer.clear();
    }

    render = (level,camera) => {
        this.webGlRenderer.render(level.getScene(),camera);
    }
}

