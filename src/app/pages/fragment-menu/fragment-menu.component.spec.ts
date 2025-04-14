import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FragmentMenuComponent } from './fragment-menu.component';

describe('FragmentMenuComponent', () => {
  let component: FragmentMenuComponent;
  let fixture: ComponentFixture<FragmentMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FragmentMenuComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FragmentMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
