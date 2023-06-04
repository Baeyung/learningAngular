import { Component, OnInit } from '@angular/core';

@Component({
  //there are different ways we can use the selectors, see commented usages in the appcomponent.html file
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  // app server Unless works when the condition is false
  template: '<app-server *appServerUnlessDirective="showServer"></app-server><app-server></app-server>',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit{

  showServer: boolean = false;

  ngOnInit(): void {
    this.showServer = true;

    setTimeout(() => {
      this.showServer = false;
    },10000);

  }

}
