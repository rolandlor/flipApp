import { Component, OnInit, Input, AfterViewChecked } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { FlipService } from 'src/app/flip.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit, AfterViewChecked {
  @Input() startAnimation: boolean = false;
  @Input() flipped: boolean = false;
  @Input() index!: number;
  @Input() imageNumber: number = 0;
  @Input() imageVisibility: boolean = false;
  @Input() itemVisibility: boolean = false;
  @Input() indexActual!: number;
  imagePath: string = '';
  constructor(private flipSrv: FlipService) {}

  ngOnInit(): void {
    this.imagePath = `assets/card${this.imageNumber}.svg`;
  }

  ngAfterViewChecked(): void {}

  onCardClick() {
    this.flipSrv.onCardClick(this.imagePath, this.index);
  }
}
