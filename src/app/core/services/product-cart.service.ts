import { Injectable } from '@angular/core';
import { CartItem } from 'src/app/utils/models/cart-item.model';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ProductCartService {

  constructor(
    private localStorageService: LocalStorageService
  ) { }

  public addToCart(item: CartItem): void {

    let cart = this.localStorageService.getObject('cart');

    if (cart) {
      const existingItem = cart.find(x => x.id === item.productId);

      if (existingItem) {
        item.quantity += existingItem.quantity;
        cart = cart.filter(x => x.id !== item.productId);
      }

      cart.push(item);

    } else {
      cart = [item];
    }

    this.localStorageService.setObject('cart', cart);
  }

  public clearCart(): void {
    localStorage.removeItem('cart');
  }

  public getCart(): any {

    const cart = this.localStorageService.getObject('cart');

    if (!cart || cart?.length < 1) {
      return null;
    }

    return cart;
  }

  public removeFromCart(itemId: number): void {
    let cart = this.localStorageService.getObject('cart');

    if (cart && cart?.length > 0) {

      cart = cart.filter(item => item.id !== itemId);

      if (cart.length < 1) {
        this.clearCart();
      }

      this.localStorageService.setObject('cart', cart);
    }
  }

  public updateItemFromCart(item: CartItem): boolean {

    let cart = this.localStorageService.getObject('cart');

    if (cart) {
      const existingItem = cart.find(x => x.id === item.productId);

      if (existingItem) {
        cart = cart.filter(x => x.id !== item.productId);
        cart.push(item);

        this.localStorageService.setObject('cart', cart);

        return true;

      } else {
        return false;
      }

    } else {
      return false;
    }
  }
}
