import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StarWarsService } from '../starwars.service';
import { StarWarsDatabaseService } from '../starwars.storage.service';
import { People } from '../models';
import { IfStmt } from '@angular/compiler';


@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.css']
})
export class PeopleDetailComponent implements OnInit {

  people: People = null;

  constructor(private activatedRoute:ActivatedRoute, 
    private swSvc: StarWarsService, 
    private swdbSvc: StarWarsDatabaseService,
    private router:Router) { }

    canShare = false;

  ngOnInit() {
    this.canShare = !!navigator['share'];
    const id = this.activatedRoute.snapshot.params.id;

    console.log('people id: ', id);

    this.swdbSvc.find(Number(id))
      .then(
        (result) => { //resolve          
          console.log('from cache: ', result)
          this.people = result;
          //throw false;
        },
        // (id) => {
        //   console.log('not in database: ', id)
        //   return (id)
        // }
        //this.swSvc.searchPeople.bind(this.swSvc) //reject
      )
      // .then(this.swSvc.searchPeople.bind(this.swSvc)) //reject
      // .then((result: People) => {
      //   console.log('this.people: ', this.people)
      //   this.people = this.people || result;
      //   return (result);
      // })      
      .then(id=>{
        console.log('id:',id);          
      })
      .catch(err => {
        if (!err)
          return;
        if (err)
          console.error('err: ', err);
      })
  }

  share() {
    navigator['share']({
      title: `Star Wars!`,
      text: `Sharing ${this.people.name} with the world!`,
      url: 'https://isaachau.github.io/html5workshop'
    })
  }

  navigateBack(){
    this.router.navigate(['/']);
  }

}
