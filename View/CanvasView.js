class CanvasView {
    constructor(canvas) {
        this.context = canvas.GetContext("2d");
    }

    fillRect() {
        this.context.fillRect(10, 10, 20, 20);
    }
}