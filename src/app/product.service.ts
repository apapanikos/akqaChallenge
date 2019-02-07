import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Headers, RequestOptions } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { Product } from './product';
import { Observable, Subject,of } from 'rxjs';


// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };

@Injectable({
  providedIn: 'root'
})
export class ProductService {



  url = "https://my-json-server.typicode.com/typicode/demo/posts";


  constructor(private http: HttpClient) {
   }

  // public postProducts(product: Product[]) :Observable<Product[]> {
  //   let headers = new Headers({ 'Content-Type': 'application/json' });
  //   let options = new RequestOptions({ headers: headers });

  //   //Make the api call to post the data
  //   return this.http.post(this.url, product, options)

  //   //Subscribe to the stream with the observable to store the data
  //   .subscribe(
  //     res => {
  //       alert("Products successfully send to API!")
  //       console.log(res);
  //     },
  //     err => {
  //       //Handle error
  //       console.log("Error occured" + err);
  //     }
  //   );
  // }




}




