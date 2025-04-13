import { Component } from '@angular/core';
import { FormBuilderService } from '../../../../services/form-builder.service';
import { LocalStorageService } from '../../../../services/local-storage.service';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
  HIT_POINTS_DEFAULT,
  IHitPoints,
  IHitPointsForm,
} from './interfaces/i-hit-points';
import { TitleComponent } from '../../components/title/title.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-hit-points',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    TitleComponent,
  ],
  templateUrl: './hit-points.component.html',
  styleUrl: './hit-points.component.scss',
})
export class HitPointsComponent {
  static readonly STORAGE_KEY = 'hitPoints';

  constructor(
    private localStorage: LocalStorageService,
    private formBuilder: FormBuilderService,
  ) {}

  hitPointsForm!: FormGroup<IHitPointsForm>;

  ngOnInit() {
    const persistedInfo: IHitPoints | null = this.localStorage.load<IHitPoints>(
      HitPointsComponent.STORAGE_KEY,
    );

    this.hitPointsForm = this.formBuilder.buildForm(
      persistedInfo ? persistedInfo : HIT_POINTS_DEFAULT,
    );

    this.hitPointsForm.valueChanges.subscribe(() => {
      this.localStorage.save<IHitPoints>(
        HitPointsComponent.STORAGE_KEY,
        this.hitPointsForm.getRawValue(),
      );
    });
  }
}
