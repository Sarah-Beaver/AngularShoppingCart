import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { AngularFireModule } from '@angular/fire/compat';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { MatCardModule } from '@angular/material/card';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDN4PKmeO_gKmV7wBhGMtW4bvnnfi2STS8",
  authDomain: "candy2-f3465.firebaseapp.com",
  projectId: "candy2-f3465",
  storageBucket: "candy2-f3465.appspot.com",
  messagingSenderId: "92083339333",
  appId: "1:92083339333:web:e97c19c1cde54a5eeb232c",
  measurementId: "G-QQYZQ8BSGV"
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    MatCardModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
