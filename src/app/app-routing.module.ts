import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessComponent } from './business/business.component';
import { HeaderComponent } from './header/header.component';
import { SportsComponent } from './sports/sports.component';
import { TechnewsComponent } from './technews/technews.component';

const routes: Routes = [
  {path:'',component:HeaderComponent},
  {path:'Technology', component:TechnewsComponent},
  {path:'Business', component:BusinessComponent},
  {path:'Sports', component:SportsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
