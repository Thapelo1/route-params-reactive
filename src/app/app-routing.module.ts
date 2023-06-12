import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CardDetailComponent} from "./card-detail/card-detail.component";

const routes: Routes = [
  {path: 'users', component: HomeComponent},
  {path: 'users/:id', component: CardDetailComponent},
  {path: '**', redirectTo: 'users'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
