import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HitPointsCondencedComponent } from './hit-points-condenced.component';

describe('HitPointsCondencedComponent', () => {
  let component: HitPointsCondencedComponent;
  let fixture: ComponentFixture<HitPointsCondencedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HitPointsCondencedComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HitPointsCondencedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
