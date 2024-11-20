import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SesionCComponent } from './sesion-c.component';

describe('SesionCComponent', () => {
  let component: SesionCComponent;
  let fixture: ComponentFixture<SesionCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SesionCComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SesionCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
