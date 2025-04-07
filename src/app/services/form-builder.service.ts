import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormBuilderService {
  public buildForm<T extends object>(data: T): FormGroup {
    const formGroup: { [key: string]: FormGroup | FormControl } = {};

    Object.keys(data).forEach((key) => {
      const value = data[key as keyof T];
      if (
        value !== null &&
        typeof value === 'object'
      ) {
        // If the value is an object, recursively create a nested FormGroup
        formGroup[key] = this.buildForm(value);
      } else {
        // Otherwise, create a FormControl
        formGroup[key] = new FormControl(value);
      }
    });

    return new FormGroup(formGroup);
  }
}
