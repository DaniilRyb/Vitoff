import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailerEquipmentComponent } from './trailer-equipment.component';

describe('TrailerEquipmentComponent', () => {
  let component: TrailerEquipmentComponent;
  let fixture: ComponentFixture<TrailerEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrailerEquipmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrailerEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
