import { Injectable } from "@angular/core";
import Dexie from 'dexie';
import { People } from "./model";

//Makes this into an Angular service
@Injectable()
export class StarwarsStorageService {

    private db: Dexie;

    people: People[];

    constructor() {
        //Create the database
        this.db = new Dexie('swdb');
        //Define the object store's schema
        this.db.version(1).stores({
            people: 'id, image, name, height, mass, hair_color, skin_color, eye_color, birth_year, gender, homeworld, films, species, vehicles, starships, created, edited, url'
        });
    }

    addPeople(people: People): Promise<number> {
        return (
            this.db['people'].put(people) //returns a promise
        );
    }

    find(id: number): Promise<People> {
        console.log('id === ', id);
        const p = new Promise<People>((resolve, reject) => {
            this.db['people'].where('id').equals(id)
                .toArray()
                .then((result: People[]) => {
                    if (result.length > 0)
                        resolve(result[0])
                    else
                        reject(id);
                })

        });
        return (p);
    }



}