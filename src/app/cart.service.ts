import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public items: Product[]=[]
  constructor() { }

  compare( a:any, b:any ) {
    if ( a.title < b.title ){
      return -1;
    }
    if ( a.title > b.title ){
      return 1;
    }
    return 0;
  }

  addToCart(product: any) {
    let candy: Product ={title:product.title,price:product.price, quantity:1}
    const found = this.items.find((obj) => {
      return obj.title === candy.title;
    });
    if(found !== undefined){
      this.items[this.items.indexOf(found)].quantity +=1;
    }
    else{
    this.items.push(candy);
    this.items.sort(this.compare);
    }
  }

  getItems() {
    return this.items;
  }

  delete(product:any){
    const index: number = this.items.indexOf(product);
    const count: number = this.items.lastIndexOf(product)-index;
    if (index !== -1) {
        this.items.splice(index, count+1);
    }
    this.items.sort(this.compare);
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
