import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContainerComponent } from './components/container/container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  public entityName: string = 'Test';

  ngOnInit(): void {
    setTimeout(() => {
      this.entityName = 'New Test';
    }, 5000)
  }
}
