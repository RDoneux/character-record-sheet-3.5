import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseCombatComponent } from './base-combat.component';

describe('BaseCombatComponent', () => {
  let component: BaseCombatComponent;
  let fixture: ComponentFixture<BaseCombatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseCombatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseCombatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
