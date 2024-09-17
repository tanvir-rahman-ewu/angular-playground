import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductService } from './services/product.service';
import { IProduct } from './models/products';
import { DataTableComponent, ICoumnDefinition } from './components/data-table/data-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DataTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'rxjs-operator';

  public products: IProduct[] = [];

  private productService = inject(ProductService);

  public columnDeifinition: ICoumnDefinition[] = [];

  ngOnInit(): void {
    this.initColumnDefinition();
    this.initProducts();
  }

  private initProducts(): void {
    this.productService.getProducts().subscribe({
      next: (products: IProduct[]) => {
        this.products = products;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {

      }
    })
  }

  private initColumnDefinition(): void {
    this.columnDeifinition = [
      {
        title: 'ID',
        name: 'Id'
      },
      {
        title: 'NAME',
        name: 'Name'
      }
    ]
  }
}
