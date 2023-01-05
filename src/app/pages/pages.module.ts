import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CvComponent } from './cv/cv.component';



@NgModule({
  declarations: [
    HomeComponent,
    CvComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HomeComponent,
    CvComponent
  ]
})
export class PagesModule { }
