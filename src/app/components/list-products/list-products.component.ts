import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  constructor(private product:ProductsService) { }

  productData: any=[];
  ngOnInit(): void {
    this.product.getAllProducts().subscribe((allData)=>{
      console.log(allData);
      this.productData=allData;
   } );

  }
  deleteProduct(product_id:any){
    this.product.deleteProduct(product_id).subscribe((result)=>{
      this.ngOnInit();
    })
  }

}
