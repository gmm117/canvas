import CanvasView from './CanvasView';

export default class PaintView {
    constructor(view) {
        if(view.getContext) {
            this.view = new CanvasView(view);
        }
    }
}