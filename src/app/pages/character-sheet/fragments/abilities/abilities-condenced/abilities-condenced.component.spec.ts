import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AbilitiesCondencedComponent } from './abilities-condenced.component';

describe('AbilitiesCondencedComponent', () => {
  let component: AbilitiesCondencedComponent;
  let fixture: ComponentFixture<AbilitiesCondencedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbilitiesCondencedComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AbilitiesCondencedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
