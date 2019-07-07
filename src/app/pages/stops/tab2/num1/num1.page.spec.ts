import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Num1Page } from './num1.page';

describe('Num1Page', () => {
  let component: Num1Page;
  let fixture: ComponentFixture<Num1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Num1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Num1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
