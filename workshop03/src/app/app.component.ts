import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { NgForm } from '@angular/forms';
import { StarwarsService } from './starwars.service';
import { StarwarsStorageService } from './starwars.storage.service';
import { People } from "./model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  @ViewChild('form')
  form: NgForm;

  // addrSelected:Address[];
  // currentTab = 0;

  // private tabs = [
  //   { label: 'A - E', pattern: /^[a-e].*/i },
  //   { label: 'F - J', pattern: /^[f-j].*/i },
  //   { label: 'K - O', pattern: /^[k-o].*/i },
  //   { label: 'P - T', pattern: /^[p-t].*/i },
  //   { label: 'U - Z', pattern: /^[u-z].*/i }
  // ]

  //svc is injected into the component
  constructor(private starwarsSvC: StarwarsService, private starwarsStorageSvC: StarwarsStorageService) { }

  ngOnInit() {
    // this.addressSvc.findAddress(this.tabs[0].pattern)
    //   .then((addr: Address[]) => {
    //     console.log('initial load address: ', addr)
    //     this.addrSelected = addr;
    //   })
    //   .catch(err => {
    //     console.error('error: ', err);
    //   })
  }

  ngOnDestroy() { }

  // processAddress(address: Address) {
  //   console.log('address: ', address);

  //   this.addressSvc.addNeweAddress(address)
  //     .then(result => {
  //       //to do
  //       console.log("Saved: ", result);
  //     })
  //     .catch(err => {
  //       console.error('err: ', err);
  //     });
  // }

  // loadAddress(event: MatTabChangeEvent) {
  //   this.currentTab = event.index;
  //   const patt = this.tabs[event.index].pattern;
  //   console.log('event: ', patt, typeof(patt))
  //   this.addressSvc.findAddress(patt)
  //     .then((addr: Address[]) => {
  //       console.log('address: ', addr);
  //       this.addrSelected = addr;
  //     })
  //     .catch(err => {
  //       console.error('error: ', err);
  //     })
  // }

  search() {
    console.log('here', this.form.value.id);
    this.starwarsSvC.searchPeople(this.form.value.id)
      .then(this.starwarsStorageSvC.addPeople.bind(this.starwarsStorageSvC))
      // .then((ppl: any) => {
      //   console.log('people: ', ppl);
      //   this.starwarsStorageSvC.addPeople(ppl);
      //   //this.addNewPeople(ppl);
      // })
      .catch(err => {
        console.error('error: ', err);
      })

    this.form.resetForm();
  }

  // addNewPeople(ppl: People) {
  //   console.log('Add people: ', ppl);

  //   this.starwarsStorageSvC.addPeople(ppl)
  //     .then(result => {
  //       //to do
  //       console.log("Saved: ", result);
  //     })
  //     .catch(err => {
  //       console.error('err: ', err);
  //     });
  // }

  // loadPeople() {

  //   console.log('Load people: ')
  //   this.starwarsStorageSvC.findAddress(patt)
  //     .then((addr: Address[]) => {
  //       console.log('address: ', addr);
  //       this.addrSelected = addr;
  //     })
  //     .catch(err => {
  //       console.error('error: ', err);
  //     })
  // }
}
