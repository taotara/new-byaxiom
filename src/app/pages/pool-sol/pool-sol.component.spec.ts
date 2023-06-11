import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolSolComponent } from './pool-sol.component';

describe('PoolSolComponent', () => {
  let component: PoolSolComponent;
  let fixture: ComponentFixture<PoolSolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoolSolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoolSolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
