import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonMenuComponent } from './button-menu.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { of } from 'rxjs';

describe('ButtonMenuComponent', () => {
  let component: ButtonMenuComponent;
  let fixture: ComponentFixture<ButtonMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonMenuComponent, RouterModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: of({}),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
