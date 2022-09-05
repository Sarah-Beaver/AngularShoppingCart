import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {


  items = this.cartService.getItems();
  total = 0.0;

  constructor(
    private cartService: CartService
  ) {
    this.updatePrice();
   }

  updatePrice(){
    this.total = 0.0;
    for( let item of this.items){
      this.total+= (item.price * item.quantity);
    }
  }

  delete(product:any){
    this.cartService.delete(product);
    this.updatePrice();
  }

  increment(product:any){
    const found = this.items.find((obj) => {
      return obj.title === product.title;
    });
    if(found !== undefined){
      this.items[this.items.indexOf(found)].quantity +=1;
    }
    this.updatePrice();
  }

  update(product:any, quantity:any){
    const found = this.items.find((obj) => {
      return obj.title === product.title;
    });

    if(found !== undefined){
      if(Number(quantity) >=1){
        this.items[this.items.indexOf(found)].quantity = Number(quantity);
        this.updatePrice();
      }
      else{
        this.delete(product);
      }
    }
    
  }

  decrement(product:any){
    const found = this.items.find((obj) => {
      return obj.title === product.title;
    });
    if(found !== undefined){
      this.items[this.items.indexOf(found)].quantity -=1;
      if (this.items[this.items.indexOf(found)].quantity <= 0){
        this.delete(product);
      }
    }
    this.updatePrice();
  }

  clearCart() {
    this.cartService.clearCart();
    this.items = this.cartService.getItems();
    this.total = 0.0; 
  }

}
