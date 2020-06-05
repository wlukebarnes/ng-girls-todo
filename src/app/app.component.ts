import { Component } from '@angular/core';

@Component({
  selector: 'app-boot',
  template: `
  <h1>
    Welcome to {{ title }}!
  </h1>

  <app-input-button-unit>ba</app-input-button-unit>
`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-list';
}
