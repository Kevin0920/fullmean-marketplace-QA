import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NewQuestionComponent } from './new-question/new-question.component';
import { ShowComponent } from './show/show.component';
import { AnswerComponent } from './answer/answer.component';
import { BuyComponent } from './buy/buy.component';
import { BrowseComponent } from './browse/browse.component';

const routes: Routes = [
  { path:'', component: LoginComponent, pathMatch: "full" },
  { path:'create', component: HomeComponent },
  { path:'question', component: NewQuestionComponent},
  { path:'question/:id',component: ShowComponent, pathMatch: "full" },
  { path:'show', component: ShowComponent },
  { path:'show/:id', component:ShowComponent },
  { path:'answer', component: AnswerComponent },
  { path:'answer/:id', component:AnswerComponent },
  // bring user id to this component 
  { path:'products/:id', component: BuyComponent },
  { path:'browse', component: BrowseComponent },
  { path:'browse/:id', component: BrowseComponent, pathMatch:"full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
