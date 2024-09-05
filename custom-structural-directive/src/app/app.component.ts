import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HideAfterDirective } from './directives/hide-after.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HideAfterDirective, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'custom-structural-directive';

  check() {
    return true;
  }
}
