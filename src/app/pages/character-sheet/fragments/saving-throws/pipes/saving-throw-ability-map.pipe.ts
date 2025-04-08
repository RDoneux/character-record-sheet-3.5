import { Pipe, PipeTransform } from '@angular/core';
import { ISavingThrows, SavingThrowsAbilityMap } from '../interfaces/i-saving-throws';

@Pipe({
  name: 'savingThrowAbilityMap'
})
export class SavingThrowAbilityMapPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    const transformedValue = value as keyof ISavingThrows;
    return SavingThrowsAbilityMap[transformedValue];
  }



}
