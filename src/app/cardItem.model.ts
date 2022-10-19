export class CardItem {
  public startAnimation: boolean = false;
  public flipped: boolean = false;
  public imageVisibility: boolean = false;
  public itemVisibility: boolean = true;

  constructor(public index: number, public imageNumber: number) {}
}
