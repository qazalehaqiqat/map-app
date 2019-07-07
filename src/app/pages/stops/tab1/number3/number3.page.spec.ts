import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Number3Page } from './number3.page';

describe('Number3Page', () => {
  let component: Number3Page;
  let fixture: ComponentFixture<Number3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Number3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Number3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
