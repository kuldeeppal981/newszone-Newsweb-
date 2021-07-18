import { Component, OnInit } from '@angular/core';
import { NewsserviceService } from '../service/newsservice.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  constructor(private _service:NewsserviceService) { }
  businessDisplay:any=[];
  ngOnInit(): void {
    this._service.business().subscribe((result)=>
    {
      this.businessDisplay=result.articles
    });
  }

}
