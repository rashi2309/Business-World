import { Component, OnInit } from '@angular/core';
import {ProfileService} from './profile.service';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import {AboutService} from '../about/about.service';
@Component({
  selector: 'app-view-profile',
   templateUrl: './view-profile.component.html',
  //    template:`{{title}}
  //    <ul>
  //    <li *ngFor="let profile of profiles">
  //      {{profile}}
  //    </li>
  //  </ul>`,
  styleUrls: ['./view-profile.component.css'],
  providers:[ProfileService,EmployeeService]
})
export class ViewProfileComponent implements OnInit {
  //  title="View profile";
  //  profiles;
  // constructor(profileService : ProfileService) { 
  //   new ProfileService();//tightly coupled to service
  //   this.profiles=profileService.getProfiles();
  //   console.log(this.profiles)
  // }

  // ngOnInit() {
  // }
  employees =[];
   data:any;
  constructor(private _empService:EmployeeService,public router: Router,private about:AboutService) { }

   ngOnInit() {
    this._empService.getEmployees().subscribe(resEmpData => this.employees = resEmpData);
    // this.employees=this._empService.getEmployees()
  }
  btnClick = function (id,Data) {
    this.router.navigate(['./about/'+id]);
    this.data=Data;
    console.log(this.data)
}
ngOnDestroy(){
  this.about.d=this.data;
  console.log(this.about.d)
}


}
