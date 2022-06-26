import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  productForm:FormGroup = new FormGroup({
    'productName':new FormControl(null,[Validators.required,Validators.minLength(2),Validators.maxLength(25)]),
    'productCategory':new FormControl(null,[Validators.required,Validators.minLength(2),Validators.maxLength(25)]),
    'productPrice':new FormControl(null,[Validators.required]),
    'productDescription':new FormControl(null,[Validators.required])
  })
  products:any []= [];
  
  addProduct() {
    this.products.push(this.productForm.value);
    
    localStorage.setItem("productsList", JSON.stringify(this.products));
    console.log(this.products);
  }
  
  

  
  

  constructor() { }

  ngOnInit(): void {
  }

}
