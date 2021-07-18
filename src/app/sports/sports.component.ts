import { Component, OnInit } from '@angular/core';
import { NewsserviceService } from '../service/newsservice.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  constructor(private _service:NewsserviceService) { }
  sportsDisplay:any=[];
  ngOnInit(): void {
    this._service.sports().subscribe((result)=>
    {
      this.sportsDisplay=result.articles
    });
  }

}
