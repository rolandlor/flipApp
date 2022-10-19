import { Component, OnInit } from '@angular/core';
import { FlipService } from './flip.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'taTaskBeta';
  constructor(public flipserv: FlipService) {}
  ngOnInit() {
    this.flipserv.init();
  }
}
