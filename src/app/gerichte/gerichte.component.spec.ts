import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerichteComponent } from './gerichte.component';

describe('GerichteComponent', () => {
  let component: GerichteComponent;
  let fixture: ComponentFixture<GerichteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GerichteComponent]
    });
    fixture = TestBed.createComponent(GerichteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
