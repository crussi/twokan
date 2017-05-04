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
  isproject: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  nextStep(step) {
    //this.selectedIndex += 1;
    console.log('notActionable: ' + this.notActionable);
    console.log('nextStep: ' + step);
    switch (step) {
      case 'isactionable':
        this.selectedIndex = 0;
        break;
      case 'multiplesteps':
        this.selectedIndex = 1;
        break;   
      case 'notactionable':
        this.selectedIndex = 2;
        break;     
      case 'confirmlist':
        this.selectedIndex = 3;
        break;           
      case 'process-notactionable':  
        console.log('inbox item processed ...');      
        break;
      case 'isproject':
        this.isproject = true;  
        this.selectedIndex = 4;      
        break;
      case 'notproject':
        this.isproject = false;  
        this.selectedIndex = 6;      
        break;
      case 'addactions':  
        this.selectedIndex = 5;    
        break;
      case 'donein2':  
        this.selectedIndex = 7;    
        break;  
      case 'doitnow':  
        this.selectedIndex = 8;    
        break;    
      case 'candelegate':  
        this.selectedIndex = 8;    
        break;  
      case 'deleate':  
        this.selectedIndex = 8;    
        break;                               
      default:
        break;
    }
  }
  // previousStep(step) {
  //   //this.selectedIndex -= 1;
  //   console.log('previousStep: ' + step);
  //   switch (step) {
  //     case 'notactionable':
  //       this.selectedIndex = 2;
  //       break;
  //     case 'multiplesteps':
  //       this.selectedIndex = 1;
  //       break;
  //     case 'isactionable':
  //       this.selectedIndex = 0;
  //       break;
  //     case 'notproject':
  //       this.isproject = false;  
  //       this.selectedIndex = 6;      
  //       break;                
  //     default:
  //       break;
  //   }    
  // }
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
  // isProject(yesno){
  //   console.log('isProject: ' + yesno);
  //   if (yesno.toLowerCase() == 'yes') {
  //     this.selectedIndex = 4;
  //   } else {
  //     this.selectedIndex = 2;
  //   }
  // }  



}
