import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
    <input #inputElementRef
          [value]="title"
          (keyup.enter)="submitValue($event.target.value)">
    <button (click)="submitValue(inputElementRef.value)">
    Save
    </button>
  `,
  styleUrls: ['./input-button-unit.component.scss']
})
export class InputButtonUnitComponent implements OnInit {
  title = 'Hello World';

  @Output() submit: EventEmitter<string> = new EventEmitter();

  constructor() { }

  submitValue(newTitle:any): void {
    this.submit.emit(newTitle)
  }

  ngOnInit() {
  }
}
