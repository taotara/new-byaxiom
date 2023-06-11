import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmManagerComponent } from './farm-manager.component';

describe('FarmManagerComponent', () => {
  let component: FarmManagerComponent;
  let fixture: ComponentFixture<FarmManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarmManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
