import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
    <p>
      input-button-unit works!
      The title is: {{title}}
    </p>
  `,
  styleUrls: ['./input-button-unit.component.scss']
})
export class InputButtonUnitComponent implements OnInit {
  title = 'Hello World';
  constructor() {
    console.log('in constructor');
    this.changeTitle("My first Angular app");
    console.log(this.title);
  }

  ngOnInit(): void {
  }

  changeTitle(newTitle: string) {
    console.log(newTitle)
    this.title = newTitle;
  }

}
