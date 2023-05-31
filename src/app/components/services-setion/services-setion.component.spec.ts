import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesSetionComponent } from './services-setion.component';

describe('ServicesSetionComponent', () => {
  let component: ServicesSetionComponent;
  let fixture: ComponentFixture<ServicesSetionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesSetionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesSetionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
