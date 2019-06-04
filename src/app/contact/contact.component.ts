import { Component, OnInit } from '@angular/core';
import { AutoGrowDirective } from '../auto-grow.directive';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
   styleUrls: ['./contact.component.css'],
  //  directives: [AutoGrowDirective]
})
export class ContactComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
 move =function(){
   this.router.navigate(['./home/']);
 }
}
