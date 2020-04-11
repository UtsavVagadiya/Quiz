import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {FormComponent} from './form/form.component';
import {QueComponent} from './que/que.component';

const routes: Routes = [
  {path: '' , component: FormComponent},
  {path: 'home' , component: HomeComponent },
  {path: 'home/:id' , component: QueComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
