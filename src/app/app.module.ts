import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import {HttpClientModule} from '@angular/common/http';
import { NewsserviceService } from './service/newsservice.service';
import { TechnewsComponent } from './technews/technews.component';
import { BusinessComponent } from './business/business.component';
import { SportsComponent } from './sports/sports.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TechnewsComponent,
    BusinessComponent,
    SportsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [NewsserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
