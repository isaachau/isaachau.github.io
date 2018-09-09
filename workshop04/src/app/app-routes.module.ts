import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PeopleListComponent } from './components/people-list.component';
import { PeopleDetailComponent } from './components/people-detail.component';
import { AddPeopleComponent } from './components/add-people.component';

const ROUTES:Routes = [
  {path:'', component:PeopleListComponent},
  {path:'people', component:PeopleListComponent},
  {path:'detail/:id', component:PeopleDetailComponent},
  {path:'add', component:AddPeopleComponent},
  {path:'**', redirectTo:'/', pathMatch:'full'}
  //{path:'**', component:PeopleListComponent}  
];

@NgModule({
  
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutesModule { }
