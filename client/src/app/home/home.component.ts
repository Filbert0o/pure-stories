import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'TrainingApp';
  myFirstVariable = 'Hello World';
  count = 0;
  constructor() { }

  ngOnInit() {
  }

  gotClicked(mfv: string): void {
    this.count += 1;
  }

  getColor(): string {
    return this.count % 2 ? 'blue' : 'red';
  }

}
