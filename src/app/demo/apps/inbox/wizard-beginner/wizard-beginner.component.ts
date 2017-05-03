import { Component, OnInit } from '@angular/core';
import {fadeInAnimation} from "../../../../route.animation";

@Component({
  selector: 'ms-wizard-beginner',
  templateUrl: './wizard-beginner.component.html',
  styleUrls: ['./wizard-beginner.component.scss'],
  host: {
    '[@fadeInAnimation]': 'true'
  },
  animations: [ fadeInAnimation ]
})
export class WizardBeginnerComponent implements OnInit {

  selectedIndex: number = 0;

  constructor() { }

  ngOnInit() {
  }

  nextStep() {
    this.selectedIndex += 1;
  }

  isActionable(yesno){
    console.log('isActionable: ' + yesno);
  }

  previousStep() {
    this.selectedIndex -= 1;
  }

}
