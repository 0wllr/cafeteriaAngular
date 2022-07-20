import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {

  constructor(private product:ProductsService) { }

  addProduct = new FormGroup({
    name:new FormControl(''),
    value:new FormControl(''),
    stock:new FormControl('')
  });

  message:boolean = false;

  ngOnInit(): void {
  }

  SaveData(){
    this.product.addProduct(this.addProduct.value).subscribe((result)=>{
      //console.log (result);
      this.message=true;
      this.addProduct.reset({});
    });
  }
  removeMessage(){
    this.message=false;
  }
}
