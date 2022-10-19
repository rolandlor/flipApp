import { Component, OnInit } from '@angular/core';
import { FlipService } from 'src/app/flip.service';

@Component({
  selector: 'app-point',
  templateUrl: './point.component.html',
  styleUrls: ['./point.component.css'],
})
export class PointComponent implements OnInit {
  point: number = 0;
  constructor(public flipservice: FlipService) {}

  ngOnInit(): void {
    this.point = Math.floor(this.flipservice.counter / 2);
  }
}
