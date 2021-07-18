import { Component, OnInit } from '@angular/core';
import { NewsserviceService } from '../service/newsservice.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _service:NewsserviceService) { }
   
  topheadingDisplay:any=[];

  ngOnInit(): void {

    this._service.topHeading().subscribe((result)=>{
      console.log(result);
      this.topheadingDisplay=result.articles;
      
    })


  }

}
