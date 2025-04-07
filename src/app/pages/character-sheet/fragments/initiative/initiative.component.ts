import { Component } from '@angular/core';
import { LocalStorageService } from '../../../../services/local-storage.service';
import { FormBuilderService } from '../../../../services/form-builder.service';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
  IInitiative,
  IInitiativeForm,
  INITIATIVE_DEFAULT,
} from './interfaces/i-initiative';
import { debounceTime } from 'rxjs';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TitleComponent } from '../../components/title/title.component';

@Component({
  selector: 'app-initiative',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, TitleComponent],
  templateUrl: './initiative.component.html',
  styleUrl: './initiative.component.scss',
})
export class InitiativeComponent {
  static readonly STORAGE_KEY = 'initiative';

  constructor(
    private localStorage: LocalStorageService,
    private formBuilder: FormBuilderService
  ) {}

  initiativeForm!: FormGroup<IInitiativeForm>;

  ngOnInit() {
    const persistedInfo = this.localStorage.load<IInitiativeForm>(
      InitiativeComponent.STORAGE_KEY
    );

    this.initiativeForm = this.formBuilder.buildForm(
      persistedInfo ? persistedInfo : INITIATIVE_DEFAULT
    );

    this.initiativeForm.valueChanges.pipe(debounceTime(1000)).subscribe(() => {
      this.localStorage.save<IInitiative>(
        InitiativeComponent.STORAGE_KEY,
        this.initiativeForm.getRawValue()
      );
    });
  }
}
