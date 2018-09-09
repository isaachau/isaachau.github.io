import { Injectable } from "@angular/core";

import Dexie from 'dexie';
import { Address } from "./model";

//Makes this into an Angular service
@Injectable()
export class AddressService {

    private db: Dexie;

    constructor() {
        //Create the database
        this.db = new Dexie('addrdb');
        //Define the object store's schema
        this.db.version(1).stores({
            contacts: 'email, name, address, phone'
        });
    }

    addNeweAddress(address: Address): Promise<string> {
        return (
            this.db['contacts']
                .put(address) //returns a promise
        );
    }

    findAddress(pattern: RegExp): Promise<Address[]> {
        return (
            this.db['contacts']
                .orderBy('name')
                .filter(addr => {
                    return (pattern.test(addr.name));
                })
                .toArray() //returns a promise
        );
    }

}