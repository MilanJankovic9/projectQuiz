import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Question13Component } from './question13.component';

describe('Question13Component', () => {
  let component: Question13Component;
  let fixture: ComponentFixture<Question13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Question13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Question13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
