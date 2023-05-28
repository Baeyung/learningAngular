import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] // we can either have a file or we can also define the styles in the component example below
  // styles or stylesURL are array as they can take multiple refrences and the one define later overrides if any styles are same
  // styles: [
  //   `
  //     h1 {
  //       color: red;
  //     }
  //   `,
  //   `
  //     h1 {
  //       color: yellow;
  //     }
  //   `
  // ]
})
export class AppComponent {
  title = 'intro-and-basics';
}
