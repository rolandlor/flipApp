import { Component, OnInit } from '@angular/core';
import { FlipService } from 'src/app/flip.service';

@Component({
  selector: 'app-restart',
  templateUrl: './restart.component.html',
  styleUrls: ['./restart.component.css'],
})
export class RestartComponent implements OnInit {
  constructor(private flpsrv: FlipService) {}

  ngOnInit(): void {}

  onRestartClick() {
    this.flpsrv.restart();
  }
}
