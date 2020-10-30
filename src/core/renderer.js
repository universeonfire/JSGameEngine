import {WebGLRenderer} from "three";

export default class Renderer {
    webGlRenderer = new WebGLRenderer();
    constructor(canvasElement){
        const params = {
            canvas: canvasElement
        }
        this.webGlRenderer = new WebGLRenderer(params);
    }

}

