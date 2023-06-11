import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffMangerComponent } from './staff-manger.component';

describe('StaffMangerComponent', () => {
  let component: StaffMangerComponent;
  let fixture: ComponentFixture<StaffMangerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffMangerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffMangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
