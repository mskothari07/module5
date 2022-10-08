import { Component, OnInit } from '@angular/core';
import {Product,products} from '../product-list/products';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product | undefined;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
 const productIdFromRoute =Number(routeParams.get('productId'));
  console.log(productIdFromRoute); 
  this.product = products.find(product => product.id === productIdFromRoute);
 
  
  
  }


}
