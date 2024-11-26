import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlvidarEComponent } from './olvidar-e.component';

describe('OlvidarEComponent', () => {
  let component: OlvidarEComponent;
  let fixture: ComponentFixture<OlvidarEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OlvidarEComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OlvidarEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
