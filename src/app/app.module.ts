import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { PagerService } from './services/index';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, Ng2SearchPipeModule, FormsModule, HttpClientModule, HttpModule
  ],
  providers: [PagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
