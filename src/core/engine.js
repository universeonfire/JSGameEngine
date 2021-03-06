import Renderer from "./renderer";
import Game from "../game";


export default class Engine{
    aspectRatio = 0;
    gtime = 0;
    
    constructor(canvas, gameView){
        this.renderer = new Renderer(canvas);
        this.canvas = canvas;
        this.gameView = gameView;
        
    }
    start = (w,h) => {
        console.log("engine initiated");
        this.canvas.width = w;
        this.canvas.height = h;
        
        this.aspectRatio = w>h ? w/h : h/w;
        this.game = new Game(this.aspectRatio);
        this.windowResize();
        this.game.start();
        window.onresize = this.windowResize;
        
        
        this.loop(0);
    }

    update = (dtime) => {
        this.game.update(dtime);
        this.renderer.update(dtime);
        
        this.renderer.render(this.game.getLevel(), this.game.getCamera());
    }

    loop = (gtime) => {
        requestAnimationFrame(this.loop.bind(this));
        
        let ltime = this.gtime;
        this.gtime = gtime;
        //miliseconds to seconds
        let dtime = (this.gtime - ltime) / 1000;
        this.update(dtime);
    }

    windowResize = () => {
        let width, height = 0;
        let windowAspectRatio = window.innerWidth / window.innerHeight;
        if(windowAspectRatio >= this.aspectRatio){
            height = window.innerHeight;
            width = window.innerHeight * this.aspectRatio;
        }else{
            height = window.innerWidth / this.aspectRatio;
            width = window.innerWidth;
        }
        //width and height
        this.gameView.style.width = width + "px";
        this.gameView.style.height = height + "px";
        //margins
        this.gameView.style.marginTop = -(height/2) + "px";
        this.gameView.style.marginLeft = -(width/2) + "px";
        
        
        this.renderer.windowResize(width,height);
        
    }
}