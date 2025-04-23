import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbilitiesV2Component } from './abilities-condenced.component';

describe('AbilitiesV2Component', () => {
  let component: AbilitiesV2Component;
  let fixture: ComponentFixture<AbilitiesV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbilitiesV2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(AbilitiesV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
