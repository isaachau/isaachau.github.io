import { Component, OnInit, OnDestroy } from '@angular/core';
import { Address } from './model';
import { AddressService } from './address.service';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  public addrSelected:Address[];

  private tabs = [
    { label: 'A - E', pattern: /^[a-e].*/i },
    { label: 'F - J', pattern: /^[f-j].*/i },
    { label: 'K - O', pattern: /^[k-o].*/i },
    { label: 'P - T', pattern: /^[p-t].*/i },
    { label: 'U - Z', pattern: /^[u-z].*/i }
  ]

  //svc is injected into the component
  constructor(private addressSvc: AddressService) { }

  ngOnInit() {
    this.addressSvc.findAddress(this.tabs[0].pattern)
      .then((addr: Address[]) => {
        console.log('initial load address: ', addr)
        this.addrSelected = addr;
      })
      .catch(err => {
        console.error('error: ', err);
      })
  }

  ngOnDestroy() { }

  processAddress(address: Address) {
    console.log('address: ', address);

    this.addressSvc.addNeweAddress(address)
      .then(result => {
        console.log("Saved: ", result);
      })
      .catch(err => {
        console.error('err: ', err);
      });
  }

  loadAddress(event: MatTabChangeEvent) {
    const patt = this.tabs[event.index].pattern;
    console.log('event: ', patt, typeof(patt))
    this.addressSvc.findAddress(patt)
      .then((addr: Address[]) => {
        console.log('address: ', addr);
        this.addrSelected = addr;
      })
      .catch(err => {
        console.error('error: ', err);
      })
  }
}
