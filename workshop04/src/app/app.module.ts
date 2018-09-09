import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import 'hammerjs';
import { PeopleListComponent } from './components/people-list.component';
import { AppRoutesModule } from './/app-routes.module';
import { StarWarsService } from './starwars.service';
import { StarWarsDatabaseService } from './starwars.storage.service';
import { PeopleDetailComponent } from './components/people-detail.component';
import { AddPeopleComponent } from './components/add-people.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PeopleListComponent,
    PeopleDetailComponent,
    AddPeopleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutesModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [StarWarsService, StarWarsDatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
