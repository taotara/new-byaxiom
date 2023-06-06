import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteDevAndHostingComponent } from './website-dev-and-hosting.component';

describe('WebsiteDevAndHostingComponent', () => {
  let component: WebsiteDevAndHostingComponent;
  let fixture: ComponentFixture<WebsiteDevAndHostingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebsiteDevAndHostingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebsiteDevAndHostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
