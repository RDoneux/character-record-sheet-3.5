import { FormGroup } from '@angular/forms';
import { debounceTime, Observable } from 'rxjs';
import { FormBuilderService } from '../services/form-builder.service';
import { LocalStorageService } from '../services/local-storage.service';
import { FormGroupType } from '../types/form-group-type';

export function initaliseFormModule<
  T extends Object,
  F extends FormGroupType<T>,
>(
  storageKey: string,
  defaultData: T,
  localStorage: LocalStorageService,
  formBuilder: FormBuilderService,
): [FormGroup<F>, Observable<T>] {
  const persistedData: T | null = localStorage.load<T>(storageKey);

  const dataForm: FormGroup<F> = formBuilder.buildForm(
    persistedData ? persistedData : defaultData,
  );

  const valueChange = dataForm.valueChanges.pipe(
    debounceTime(1000),
  ) as Observable<T>;

  valueChange.subscribe(() => {
    localStorage.save<T>(storageKey, dataForm.getRawValue() as T);
  });

  return [dataForm, valueChange];
}
