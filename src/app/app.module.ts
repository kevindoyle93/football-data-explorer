import { MaterialModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MatchService } from "./match-service.service";
import { StatsService } from './stats/stats.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MaterialModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [MatchService, StatsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
