import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.css']
})
export class EditProductsComponent implements OnInit {

  constructor(private product:ProductsService, private router:ActivatedRoute) { }

  editProduct = new FormGroup({
    name:new FormControl(''),
    value:new FormControl(''),
    stock:new FormControl('')
  });

  message:boolean = false;

  ngOnInit(): void {
    this.product.getProductById(this.router.snapshot.params['id']).subscribe((result:any)=>{
      console.log(result);
      this.editProduct = new FormGroup({
        name:new FormControl(result['name']),
        value:new FormControl(result['value']),
        stock:new FormControl(result['stock'])
      });
    });
  }

  UpdateData(){

    this.product.updateProduct(this.router.snapshot.params['id'], this.editProduct.value).subscribe((result)=>{
      console.log(result);
      this.message=true;
      this.editProduct.reset({});
    })

  }
  removeMessage(){
    this.message=false;
  }
}
