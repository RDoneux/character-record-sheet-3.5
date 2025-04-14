import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  InputSignal,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Fragment, fragmentMenu } from './data/fragment-menu';
import { FragmentOptionsComponent } from './fragments/fragment-options/fragment-options.component';
import {
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-fragment-menu',
  imports: [MatDialogModule, MatIconModule],
  templateUrl: './fragment-menu.component.html',
  styleUrl: './fragment-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FragmentMenuComponent {
  readonly dialog = inject(MatDialog);
  dialogRef!: MatDialogRef<FragmentOptionsComponent, any>;

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string) {
    const dialogRef = this.dialog.open(FragmentOptionsComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRef
      .afterClosed()
      .subscribe((selectedOption: Fragment | undefined) => {
        if (selectedOption) {
          this.loadFragment(selectedOption);
        }
      });
  }

  preloadedFragment: InputSignal<Fragment | undefined> = input<Fragment>();
  fragmentMenu = fragmentMenu;

  @ViewChild('container', { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;

  ngOnInit() {
    const fragmentToPreload = this.preloadedFragment();
    if (fragmentToPreload) {
      this.loadFragment(fragmentToPreload);
    }
  }

  onOptionSelected(event: Fragment) {
    this.loadFragment(event);
  }

  async loadFragment(fragment: Fragment) {
    this.container.clear();
    const component = await this.fragmentMenu[fragment]();
    this.container.createComponent(component);
  }
}
