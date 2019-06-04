import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params,Router} from '@angular/router';
import {AboutService} from '../about/about.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
 
})
export class AboutComponent implements OnInit {
   data=[];
  constructor(private router:Router,private about:AboutService) { }
  ngOnInit() {
    // this.name1=this.route.snapshot.params['name'];
    this.data=this.about.d;
     console.log(this.data);
  }
  go=function(){
    this.router.navigate(['./view/']);
  }

}
