import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  constructor(private product:ProductsService) { }
  productData={};
  ngOnInit(): void {
    this.product.getAllProducts().subscribe((allData)=>{
      console.log(allData);
      this.productData=allData;
   } );



  }

}
