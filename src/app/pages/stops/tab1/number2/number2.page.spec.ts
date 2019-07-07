import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Number2Page } from './number2.page';

describe('Number2Page', () => {
  let component: Number2Page;
  let fixture: ComponentFixture<Number2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Number2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Number2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
