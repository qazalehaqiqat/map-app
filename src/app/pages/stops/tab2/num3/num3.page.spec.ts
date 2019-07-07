import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Num3Page } from './num3.page';

describe('Num3Page', () => {
  let component: Num3Page;
  let fixture: ComponentFixture<Num3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Num3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Num3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
