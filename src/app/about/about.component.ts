import { Component, OnInit } from "@angular/core";
import { Product } from "../product";
import { ProductsService } from "../products.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  products: Product[] = [];

  constructor(private prodService: ProductsService) {}

  ngOnInit(): void {
    this.products = this.prodService.products;
  }
}