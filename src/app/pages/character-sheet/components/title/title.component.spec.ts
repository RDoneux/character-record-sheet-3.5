import {
  ComponentFixture,
  ComponentFixtureAutoDetect,
  TestBed,
} from '@angular/core/testing';

import { TitleComponent } from './title.component';
import { ComponentRef, input, signal } from '@angular/core';

describe('TitleComponent', () => {
  let component: TitleComponent;
  let componentRef: ComponentRef<TitleComponent>;
  let fixture: ComponentFixture<TitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TitleComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;

    // Provide values for the required InputSignals
    (component as any).fullTitle = signal('Test Full Title');
    (component as any).shortTitle = signal('Test Short Title');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
