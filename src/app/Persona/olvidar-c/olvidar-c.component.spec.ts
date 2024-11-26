import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlvidarCComponent } from './olvidar-c.component';

describe('OlvidarCComponent', () => {
  let component: OlvidarCComponent;
  let fixture: ComponentFixture<OlvidarCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OlvidarCComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OlvidarCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
