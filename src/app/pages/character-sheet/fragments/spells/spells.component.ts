import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { FormBuilderService } from '../../../../services/form-builder.service';
import { LocalStorageService } from '../../../../services/local-storage.service';
import { ISpellsForm, ISpells, SPELLS_DEFAULT } from './interfaces/i-spells';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-spells',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule
  ],
  templateUrl: './spells.component.html',
  styleUrl: './spells.component.scss',
})
export class SpellsComponent {
  static readonly STORAGE_KEY = 'spells';

  constructor(
    private localStorage: LocalStorageService,
    private formBuilder: FormBuilderService
  ) {}

  spellsForm!: FormGroup<ISpellsForm>;

  ngOnInit() {
    const persistedSpells: ISpells | null = this.localStorage.load<ISpells>(
      SpellsComponent.STORAGE_KEY
    );

    this.spellsForm = this.formBuilder.buildForm(
      persistedSpells ? persistedSpells : SPELLS_DEFAULT
    );

    this.spellsForm.valueChanges.pipe(debounceTime(1000)).subscribe(() => {
      this.localStorage.save<ISpells>(
        SpellsComponent.STORAGE_KEY,
        this.spellsForm.getRawValue()
      );
    });
  }

  get spellControls() {
    return Object.keys(this.spellsForm.controls);
  }

  getSpells(level: string): string[] {
    return (
      Object.keys((this.spellsForm.get(level) as FormGroup).controls) || []
    );
  }

  removeSpell(level: string, spell: string) {
    const control: FormGroup = this.spellsForm.get(level) as FormGroup;
    if (control) {
      control.removeControl(spell);
    }
  }

  addSpell(level: string, spell: string) {
    const control: FormGroup = this.spellsForm.get(level) as FormGroup;
    if (control) {
      control.addControl(`${+spell + 1}`, new FormControl(''));
    }
  }
}
