import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StarWarsService } from '../starwars.service';
import { StarWarsDatabaseService } from '../starwars.storage.service';

import { People } from '../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-people',
  templateUrl: './add-people.component.html',
  styleUrls: ['./add-people.component.css']
})
export class AddPeopleComponent implements OnInit {

  people: People = null;

  //constructor(private swSvc: StarWarsService, private swdbSvc: StarWarsDatabaseService) { }
  constructor(private router:Router, private swSvc: StarWarsService, private swdbSvc: StarWarsDatabaseService ) { }

  ngOnInit() {
  }

  search(form: NgForm) {
    console.log('people id: ', form.value.peopleId);

    this.people = null;

    this.swdbSvc.find(form.value.peopleId)
      .then(
        (result) => { //resolve
          this.router.navigate(['/']);
          console.log('from cache: ', result)
          this.people = result;
          throw false
        },
        // (id) => {
        //   console.log('not in database: ', id)
        //   return (id)
        // }
        this.swSvc.searchPeople.bind(this.swSvc) //reject
      )
      // .then(this.swSvc.searchPeople.bind(this.swSvc)) //reject
      // .then((result: People) => {
      //   console.log('this.people: ', this.people)
      //   this.people = this.people || result;
      //   return (result);
      // })
      .then(this.swdbSvc.save.bind(this.swdbSvc))
      .then(id=>{
        console.log('id:',id);
          this.router.navigate(['/'],{
            queryParams:{
              message:`Saved ${id}`
            }
          })
      })
      .catch(err => {
        if (!err)
          return;
        if (err)
          console.error('err: ', err);
      })

    /*
    this.swSvc.searchPeople(this.form.value.peopleId)
      .then(this.swdbSvc.save.bind(this.swdbSvc))
      /*
      .then(result => {
        console.log('result: ', result);
        this.swdbSvc.save(result);
      })
      .catch(err => {
        console.error('err: ', err);
      })
      */

    form.resetForm();
  }

  navigateBack(){
    this.router.navigate(['/']);
  }

}
