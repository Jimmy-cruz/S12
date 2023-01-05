import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CvComponent } from './cv/cv.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    CvComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    HomeComponent,
    CvComponent
  ]
})
export class PagesModule { }
