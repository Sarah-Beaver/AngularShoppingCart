import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public candy: Observable<any[]>;
  constructor(private db: AngularFirestore, private cartService: CartService) {
    this.candy = db.collection('candy').valueChanges();
    console.log(this.candy);
    
  }

  addToCart(product: any) {
    console.log(product);
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

  ngOnInit(): void {
    
  }

}
