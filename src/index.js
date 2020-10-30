import Engine from "./core/engine";

window.onload = () => {
    let canvas = document.getElementById("viewport");
    let engine = new Engine(canvas);
    engine.start();
}