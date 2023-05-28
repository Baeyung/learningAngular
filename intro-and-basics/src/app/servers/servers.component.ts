import { Component } from '@angular/core';

@Component({
  //there are different ways we can use the selectors, see commented usages in the appcomponent.html file
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  template: '<app-server></app-server><app-server></app-server>',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent {

}
