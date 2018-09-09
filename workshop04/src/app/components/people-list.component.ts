import { Component, OnInit } from '@angular/core';
import { StarWarsDatabaseService } from '../starwars.storage.service';
import { People } from '../models';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})



export class PeopleListComponent implements OnInit {

  people:People[] = [];

  constructor(private swdbSvc:StarWarsDatabaseService, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.swdbSvc.getAll()
    .then((result)=>{
      console.log(result);
      this.people =result;

      console.log("message",this.activatedRoute.snapshot.params.message);

    })
  }

}
