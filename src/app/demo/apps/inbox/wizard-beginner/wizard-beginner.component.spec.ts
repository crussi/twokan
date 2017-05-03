import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardBeginnerComponent } from './wizard-beginner.component';

describe('WizardBeginnerComponent', () => {
  let component: WizardBeginnerComponent;
  let fixture: ComponentFixture<WizardBeginnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizardBeginnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardBeginnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
