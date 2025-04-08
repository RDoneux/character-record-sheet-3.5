import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormBuilderService } from '../../../../services/form-builder.service';
import { LocalStorageService } from '../../../../services/local-storage.service';
import {
  BASE_COMBAT_DEFAULT,
  IBaseCombat,
  IBaseCombatForm,
} from './interfaces/i-base-combat';
import { debounceTime } from 'rxjs';
import { TitleComponent } from '../../components/title/title.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-base-combat',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    TitleComponent,
    CommonModule,
  ],
  templateUrl: './base-combat.component.html',
  styleUrl: './base-combat.component.scss',
})
export class BaseCombatComponent {
  static readonly STORAGE_KEY = 'baseAttack';

  constructor(
    private localStorage: LocalStorageService,
    private formBuilder: FormBuilderService
  ) {}

  baseCombatForm!: FormGroup<IBaseCombatForm>;

  ngOnInit() {
    const persistedInfo: IBaseCombat | null =
      this.localStorage.load<IBaseCombat>(BaseCombatComponent.STORAGE_KEY);

    this.baseCombatForm = this.formBuilder.buildForm(
      persistedInfo ? persistedInfo : BASE_COMBAT_DEFAULT
    );

    this.baseCombatForm.valueChanges.pipe(debounceTime(1000)).subscribe(() => {
      this.localStorage.save<IBaseCombat>(
        BaseCombatComponent.STORAGE_KEY,
        this.baseCombatForm.getRawValue()
      );
    });
  }
}
