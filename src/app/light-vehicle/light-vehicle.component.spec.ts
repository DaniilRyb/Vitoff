import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightVehicleComponent } from './light-vehicle.component';

describe('LightVehicleComponent', () => {
  let component: LightVehicleComponent;
  let fixture: ComponentFixture<LightVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LightVehicleComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LightVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
