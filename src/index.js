import Engine from "./core/engine";

window.onload = () => {
    let canvas = document.getElementById("canvas");
    let gameView = document.getElementById("gameView");
    //console.log(canvas, gameView);

    let engine = new Engine(canvas, gameView);
    engine.start(800,600);
}