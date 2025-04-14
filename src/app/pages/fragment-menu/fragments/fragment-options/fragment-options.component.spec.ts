import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FragmentOptionsComponent } from './fragment-options.component';

describe('FragmentOptionsComponent', () => {
  let component: FragmentOptionsComponent;
  let fixture: ComponentFixture<FragmentOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FragmentOptionsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FragmentOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
