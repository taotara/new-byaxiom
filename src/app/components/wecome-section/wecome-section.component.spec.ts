import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WecomeSectionComponent } from './wecome-section.component';

describe('WecomeSectionComponent', () => {
  let component: WecomeSectionComponent;
  let fixture: ComponentFixture<WecomeSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WecomeSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WecomeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
