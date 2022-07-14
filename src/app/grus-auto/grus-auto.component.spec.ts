import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrusAutoComponent } from './grus-auto.component';

describe('GrusAutoComponent', () => {
  let component: GrusAutoComponent;
  let fixture: ComponentFixture<GrusAutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GrusAutoComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrusAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
