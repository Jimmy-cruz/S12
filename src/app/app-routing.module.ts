import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './pages/cv/cv.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  // se crea las rutas del home '' para mostrar el inicio, y 'cv' para mostrar el cv
  {path:'', component:HomeComponent},
  {path:'cv', component:CvComponent},
  {path:'**', pathMatch:'full', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
