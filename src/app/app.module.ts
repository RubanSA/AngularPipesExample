import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PipesTestComponent } from './pipes-test/pipes-test.component';
import { JoinPipe } from './join.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PipesTestComponent,
    JoinPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
