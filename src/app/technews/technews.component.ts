import { Component, OnInit } from '@angular/core';
import { NewsserviceService } from '../service/newsservice.service';
@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.css']
})
export class TechnewsComponent implements OnInit {

  constructor(private _service:NewsserviceService) { }
  
  technewsDisplay:any=[];
  ngOnInit(): void {
    this._service.techNews().subscribe((result)=>
    {
      this.technewsDisplay=result.articles
    });
  }

}
