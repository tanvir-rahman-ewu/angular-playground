import { Component, InputSignal, OnInit, effect, input } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  public entityName: InputSignal<string> = input.required<string>();

  constructor(private titleSerivce: Title) {
    effect(() => {
      this.titleSerivce.setTitle(this.entityName())
    });
  }

}
