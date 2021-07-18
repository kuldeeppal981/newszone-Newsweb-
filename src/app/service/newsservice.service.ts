import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule}from '@angular/common/http';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsserviceService {

  constructor(private _http:HttpClient) { }

  newsApiUrl="https://newsapi.org/v2/top-headlines?country=in&apiKey=6544844ca05f4093835224e0aa344161";

  techApiUrl="https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=6544844ca05f4093835224e0aa344161";

  businessApiUrl="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=6544844ca05f4093835224e0aa344161";

  sportsApiUrl="https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=6544844ca05f4093835224e0aa344161";

  topHeading():Observable<any>
  {
    return this._http.get(this.newsApiUrl);
  }

  techNews():Observable<any>
  {
    return this._http.get(this.techApiUrl);
  }

  business():Observable<any>
  {
    return this._http.get(this.businessApiUrl);
  }

  sports():Observable<any>
  {
    return this._http.get(this.sportsApiUrl);
  }
}
