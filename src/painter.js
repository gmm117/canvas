import PaintView from "./View/PaintView";
import PaintViewModel from './ViewModel/PaintViewModel';

export default class painter {
  constructor(view) {
      this.PaintView = new PaintView(view);
      this.PaintViewModel = new PaintViewModel(this.PaintView);
  }   
}

window.painter = painter;