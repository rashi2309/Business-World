import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { AutoGrowDirective } from './auto-grow.directive';
import { AboutComponent } from './about/about.component';
import { AboutService } from './about/about.service';

@NgModule({
  declarations: [
    AppComponent,
   
    HomeComponent,
    ContactComponent,
    ViewProfileComponent,
      AutoGrowDirective,
      AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [AboutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
