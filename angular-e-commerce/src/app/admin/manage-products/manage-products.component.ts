import { Observable } from 'rxjs';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {
  products: Observable<any>;

  constructor(private prodService: ProductService) {
    this.products = prodService.getAll();
   }

  ngOnInit() {
  }

}
