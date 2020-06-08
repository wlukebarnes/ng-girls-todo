import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
    <input #inputElementRef
          [value]="title"
          (keyup.enter)="changeTitle(inputElementRef.value)">
    <button (click)="changeTitle(inputElementRef.value)">
    Save
    </button>
  `,
  styleUrls: ['./input-button-unit.component.scss']
})
export class InputButtonUnitComponent implements OnInit {
  title = 'Hello World';

  constructor() { }

  changeTitle(inputElementReference: string): void {
    this.title = inputElementReference;
  }

  ngOnInit() {
  }
}
