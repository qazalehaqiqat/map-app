import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgPage } from './img.page';

describe('ImgPage', () => {
  let component: ImgPage;
  let fixture: ComponentFixture<ImgPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
