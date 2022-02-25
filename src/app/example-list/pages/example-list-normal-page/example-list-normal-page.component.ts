import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-list-normal-page',
  templateUrl: './example-list-normal-page.component.html',
  styleUrls: ['./example-list-normal-page.component.scss'],
})
export class ExampleListNormalPageComponent implements OnInit {
  readonly data = [
    { icon: 'people', type: 'primary', text: 'Ploy', number: 1501 },
    { icon: 'events', type: 'primary', text: 'BBB', number: 1502 },
    { icon: 'delete', type: 'warn', text: 'CCC', number: 1503 },
    { icon: 'cancel', type: 'warn', text: 'DDD', number: 1504 },
    { icon: 'save', type: 'accent', text: 'EEE', number: 1505 },
    { icon: 'phone', type: 'primary', text: 'FFF', number: 1506 },
    { icon: 'email', type: 'primary', text: 'GGG', number: 1507 },
  ];
  constructor() {}

  ngOnInit(): void {
    return;
  }
}
