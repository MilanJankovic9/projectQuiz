import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Question12Component } from './question12.component';

describe('Question12Component', () => {
  let component: Question12Component;
  let fixture: ComponentFixture<Question12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Question12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Question12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
