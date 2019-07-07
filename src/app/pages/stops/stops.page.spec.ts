import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StopsPage } from './stops.page';

describe('StopsPage', () => {
  let component: StopsPage;
  let fixture: ComponentFixture<StopsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StopsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StopsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
