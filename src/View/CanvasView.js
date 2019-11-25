export default class CanvasView {
    constructor(canvas) {
        this.context = canvas.getContext("2d");
        this.fillRect();
    }

    fillRect() {
        this.context.fillRect(10, 10, 20, 20);
    }
}