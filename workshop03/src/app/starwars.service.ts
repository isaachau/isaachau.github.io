import { Injectable } from "@angular/core";
import Dexie from 'dexie';
import { People } from "./model";
import { HttpClient, HttpParams, HttpErrorResponse } from "@angular/common/http";
const peopleURL = "https://swapi.co/api/people/";
const imageURL = "https://swapi.co/api/people/";

//Makes this into an Angular service
@Injectable()
export class StarwarsService {

    //private db: Dexie;

    people: People[];

    constructor(private http: HttpClient) { }

    searchPeople(id: number):Promise<People> {
        return(
            this.http.get<People>(peopleURL + id)
            .toPromise()
            .then(result=>{
                result.id = id;
                result.image = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
                return(result);
            })
            
        );

    }

}