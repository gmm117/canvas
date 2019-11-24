import CanvasView from './View/CanvasView';

class PaintView {
    constructor(view) {
        if(view.getContext) {
            this.view = new CanvasView(view);
        }
    }
}