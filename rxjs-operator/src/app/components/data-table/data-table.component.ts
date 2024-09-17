import { Component, Input } from '@angular/core';

export interface ICoumnDefinition {
  title: string,
  name: string
}

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css'
})
export class DataTableComponent {
  @Input()
  public data: any[] = [];

  @Input()
  public columnDefinition: ICoumnDefinition[] = [];
}
