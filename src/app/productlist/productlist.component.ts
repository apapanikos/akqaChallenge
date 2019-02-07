import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { FormControl } from '@angular/forms';
import { ProductService } from '../product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {

  public products$ : Observable<Product[]>;

  products: Product[];
  subtotal: number = 0;
  vat: number = 0;
  total: number = 0;
  pquantity = new FormControl('');

  constructor(private ProductService : ProductService) {
    this.products = [
      {
        product_id : "pd0",
        product_size : "Medium",
        product_name : "Cotton T-Shirt",
        product_price : 1.99,
        product_quantity : 1,
        product_cost : 1.99

      },
      {
        product_id : "pd1",
        product_size : "One Size",
        product_name : "Baseball Cap",
        product_price : 2.99,
        product_quantity : 2,
        product_cost : 5.98
      },
      {
        product_id : "pd2",
        product_size : "Medium",
        product_name : "Swim Shorts",
        product_price : 3.99,
        product_quantity : 1,
        product_cost : 3.99
      }
    ];
   }

  ngOnInit() {

    this.calcSubTotalAmount();

    this.calcVAT();

    this.calcTotalAmount();

  }

  //Change value of input
  changeVal(inputQuantity, pid){

    for(var i=0;i<this.products.length;i++){

      //Match the id of the product
      if(this.products[i].product_id === pid){  


        //Check the the limits of quantity
        if(inputQuantity.value >0 && inputQuantity.value < 11 && inputQuantity.value % 1 === 0){

          this.products[i].product_quantity = inputQuantity.value;

          this.productSum(this.products[i].product_id);
  
          this.calcSubTotalAmount();
  
          this.calcVAT();
      
          this.calcTotalAmount();
        }
        else{
          alert('Please select between 1 to 10');

        }

      }           
    }



  }

  //Calculate the subtotal without vat
  calcSubTotalAmount(){

    this.subtotal = 0;

    for(var i=0;i<this.products.length;i++){

      //Calculate the subtotal based on quantity
      this.subtotal += (this.products[i].product_price * this.products[i].product_quantity);

    }
  }

  //Calculate the tax
  calcVAT(){

    this.vat = (this.subtotal * 20) / 100;


  }
  // Calculate the total amount
  calcTotalAmount(){

    this.total = 0;

    for(var i=0;i<this.products.length;i++){

      this.total = this.subtotal + this.vat;

    }
  }

//Increase quantity of products
  add(pid){

    for(var i=0;i<this.products.length;i++){

      //Match the id of the product
      if(this.products[i].product_id === pid){  


       //Check the limits of the quantity
       if( this.products[i].product_quantity < 10){

        this.products[i].product_quantity += 1;

        this.productSum(this.products[i].product_id);

       }
       else{
         alert('Plese select between 1 to 10');
       }


      }           
    }


    this.calcSubTotalAmount();

    this.calcVAT();

    this.calcTotalAmount();

  }

  //Decrease quantity of products
  dec(pid){

    for(var i=0;i<this.products.length;i++){

      //Match the id of the product
      if(this.products[i].product_id === pid){  

      //Check the limits of the quantity
       if( this.products[i].product_quantity > 1){

        this.products[i].product_quantity -= 1;

        this.productSum(this.products[i].product_id);

       }
       else{
         alert('Plese select between 1 to 10');
       }


      }           
    }

    this.calcSubTotalAmount();

    this.calcVAT();

    this.calcTotalAmount();


    console.log(this.products);
  }

  //Calculate the cost of a product based in quantity
  productSum(pid){


    for(var i=0;i<this.products.length;i++){
  
      if(this.products[i].product_id === pid){  

        this.products[i].product_cost = this.products[i].product_price * this.products[i].product_quantity;

      }           
    }

  }


  //Delete product from Basket
  del(pid){

    for(var i=0;i<this.products.length;i++){

      if(this.products[i].product_id === pid){  

        //Erase current product from array
        this.products.splice(i,1);

      }           
    }

    this.calcSubTotalAmount();

    this.calcVAT();

    this.calcTotalAmount();

  }

  //Collect and post data to a API endpoint 
 postData(){
 
  //Debugging reasons
    // console.log(this.products)
    console.log("Subtotal: " + this.subtotal, "Total: " + this.total)
 
    //Call the service function to post the data to API endpoint
    // this.products$ = this.ProductService.postProducts(this.products)






 }


}

