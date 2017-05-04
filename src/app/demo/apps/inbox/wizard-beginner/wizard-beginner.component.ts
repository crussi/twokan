import { Component, Input, OnInit } from '@angular/core';
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
  @Input('description') description: string;

  selectedIndex: number = 0;
  notActionable: string;

  constructor() { }

  ngOnInit() {
  }

  nextStep(step) {
    //this.selectedIndex += 1;
    console.log('notActionable: ' + this.notActionable);
    console.log('nextStep: ' + step);
  }
  previousStep(step) {
    //this.selectedIndex -= 1;
    console.log('previousStep: ' + step);
  }
  isActionable(yesno){
    console.log('isActionable: ' + yesno);
    if (yesno.toLowerCase() == 'yes') {
      console.log('yes ... selectedIndex = 1');
      this.selectedIndex = 1;
    } else {
      console.log('no ... selectedIndex = 2');
      this.selectedIndex = 2;
    }
  }
  isProject(yesno){
    console.log('isProject: ' + yesno);
    if (yesno.toLowerCase() == 'yes') {
      //this.selectedIndex = 1;
    } else {
      //this.selectedIndex = 2;
    }
  }  



}
