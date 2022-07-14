import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockRepairComponent } from './block-repair.component';

describe('BlockRepairComponent', () => {
  let component: BlockRepairComponent;
  let fixture: ComponentFixture<BlockRepairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlockRepairComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockRepairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
