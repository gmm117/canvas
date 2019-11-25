import PaintView from "./View/PaintView";
import PaintViewModel from './ViewModel/PaintViewModel';

export default class PaintCtrl {
  constructor(view) {
      this.PaintView = new PaintView(view);
      this.PaintViewModel = new PaintViewModel(this.PaintView);
  }   
}

window.PaintCtrl = PaintCtrl;