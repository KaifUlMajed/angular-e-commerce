import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Observable } from 'rxjs';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  categories: Observable<any>;
  constructor(private catService: CategoryService, private prodService: ProductService) { }

  ngOnInit() {
    this.categories = this.catService.getCategories();
  }

  save(product) {
    this.prodService.create(product);
  }

}
