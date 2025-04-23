import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Fragment, fragmentMenu } from '../../data/fragment-menu';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { KebabToTextPipe } from '../../../../pipes/kebab-to-text.pipe';

@Component({
  selector: 'app-fragment-options',
  imports: [MatButtonModule, MatDialogModule, KebabToTextPipe],
  templateUrl: './fragment-options.component.html',
  styleUrl: './fragment-options.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FragmentOptionsComponent {
  readonly dialogRef = inject(MatDialogRef<FragmentOptionsComponent>);
  readonly fragmentOptions = Object.keys(fragmentMenu);

  onOptionSelected(option: string) {
    this.dialogRef.close(option as Fragment);
  }
}
