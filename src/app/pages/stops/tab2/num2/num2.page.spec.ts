import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Num2Page } from './num2.page';

describe('Num2Page', () => {
  let component: Num2Page;
  let fixture: ComponentFixture<Num2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Num2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Num2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
