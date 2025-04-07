import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor() {}

  abilityAbbreviation(ability: string) {
    return ability.substring(0, 3).toUpperCase();
  }

  camelCaseToNormalText(camelCase: string): string {
    return camelCase
      .replace(/([a-z])([A-Z])/g, '$1 $2') // Add space before uppercase letters
      .replace(/^./, (str) => str.toUpperCase()); // Capitalize the first letter
  }
}
