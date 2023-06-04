import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteleSectionComponent } from './clientele-section.component';

describe('ClienteleSectionComponent', () => {
  let component: ClienteleSectionComponent;
  let fixture: ComponentFixture<ClienteleSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteleSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienteleSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
