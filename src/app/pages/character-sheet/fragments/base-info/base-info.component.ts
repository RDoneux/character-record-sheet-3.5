import { Component } from '@angular/core';
import { LocalStorageService } from '../../../../services/local-storage.service';
import {
  Alignment,
  BASE_INFO_DEFAULT,
  IBaseInfo,
  IBaseInfoForm,
} from './interfaces/i-base-info';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormBuilderService } from '../../../../services/form-builder.service';
import { debounceTime } from 'rxjs/operators';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-base-info',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  templateUrl: './base-info.component.html',
  styleUrl: './base-info.component.scss',
})
export class BaseInfoComponent {
  static readonly STORAGE_KEY = 'baseInfo';

  constructor(
    private localStorage: LocalStorageService,
    private formBuilder: FormBuilderService,
  ) {}

  baseInfoForm!: FormGroup<IBaseInfoForm>;
  alignments = Object.values(Alignment);

  ngOnInit() {
    const persistedInfo: IBaseInfo | null = this.localStorage.load<IBaseInfo>(
      BaseInfoComponent.STORAGE_KEY,
    );

    this.baseInfoForm = this.formBuilder.buildForm(
      persistedInfo ? persistedInfo : BASE_INFO_DEFAULT,
    );

    this.baseInfoForm.valueChanges.pipe(debounceTime(1000)).subscribe(() => {
      this.localStorage.save<IBaseInfo>(
        BaseInfoComponent.STORAGE_KEY,
        this.baseInfoForm.getRawValue(),
      );
    });
  }
}
