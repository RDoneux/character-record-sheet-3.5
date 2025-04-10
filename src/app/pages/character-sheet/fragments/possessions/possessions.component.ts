import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { debounceTime } from 'rxjs';
import { FormBuilderService } from '../../../../services/form-builder.service';
import { LocalStorageService } from '../../../../services/local-storage.service';
import {
  IPossessionsForm,
  IPossessions,
  POSSESSIONS_DEFAULT,
  POSSESSION_DEFAULT,
} from './interfaces/i-possessions';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-possessions',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
  ],
  templateUrl: './possessions.component.html',
  styleUrl: './possessions.component.scss',
})
export class PossessionsComponent {
  static readonly STORAGE_KEY = 'possessions';

  constructor(
    private localStorage: LocalStorageService,
    private formBuilder: FormBuilderService
  ) {}

  possessionsForm!: FormGroup<IPossessionsForm>;

  ngOnInit() {
    const persistedInfo: IPossessions | null =
      this.localStorage.load<IPossessions>(PossessionsComponent.STORAGE_KEY);

    this.possessionsForm = this.formBuilder.buildForm(
      persistedInfo ? persistedInfo : POSSESSIONS_DEFAULT
    );

    this.possessionsForm.valueChanges.pipe(debounceTime(1000)).subscribe(() => {
      this.localStorage.save<IPossessions>(
        PossessionsComponent.STORAGE_KEY,
        this.possessionsForm.getRawValue()
      );
    });
  }

  get possessions() {
    return Object.keys(
      (this.possessionsForm.get('items') as FormGroup).controls
    );
  }

  removePossession(index: string) {
    const items = this.possessionsForm.get('items') as FormGroup;
    items.removeControl(index);
  }

  addPossession(index: string) {
    (this.possessionsForm.get('items') as FormGroup).addControl(
      `${+index + 1}`,
      this.formBuilder.buildForm(POSSESSION_DEFAULT)
    );
  }
}
