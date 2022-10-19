import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card/card.component';
import { PointComponent } from './point/point/point.component';
import { RestartComponent } from './restart/restart/restart.component';
import { FlipService } from './flip.service';
import { PointPipe } from './point.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    PointComponent,
    RestartComponent,
    PointPipe,
  ],
  imports: [BrowserModule],
  providers: [FlipService],
  bootstrap: [AppComponent],
})
export class AppModule {}
