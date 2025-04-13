import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMenuComponent } from './page-menu.component';
import { ActivatedRoute, RouterModule } from '@angular/router';

describe('PageMenuComponent', () => {
  let component: PageMenuComponent;
  let fixture: ComponentFixture<PageMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageMenuComponent, RouterModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { paramMap: { get: () => null } },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PageMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
