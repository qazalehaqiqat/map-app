import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Number1Page } from './number1.page';

describe('Number1Page', () => {
  let component: Number1Page;
  let fixture: ComponentFixture<Number1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Number1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Number1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
