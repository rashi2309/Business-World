import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from'./home/home.component';
import {ViewProfileComponent} from'./view-profile/view-profile.component';
import {ContactComponent} from'./contact/contact.component';
import {AboutComponent} from './about/about.component'
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path :'home',component:HomeComponent},
  {path :'view',component:ViewProfileComponent},
  {path :'contact',component:ContactComponent},
  {path:'about/:id',component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
