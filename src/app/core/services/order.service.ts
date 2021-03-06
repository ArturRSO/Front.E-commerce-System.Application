import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private baseApiUrl = `${environment.API_URL}/orders`;

  constructor(
    private http: HttpClient
  ) { }

  public createOrder(order: any): any {

    return this.http.post(`${this.baseApiUrl}/create`, order).pipe(
      map(response => {
        return response;
      }),
      catchError((error: any) => throwError(error))
    );
  }

  public getOrdersByStoreId(storeId: number) {

    return this.http.get<any>(`${this.baseApiUrl}/store/${storeId}`).pipe(
      map(response => {
        return response;
      }),
      catchError((error: any) => throwError(error))
    );
  }

  public getOrdersByUserId(userId: number) {

    return this.http.get<any>(`${this.baseApiUrl}/user/${userId}`).pipe(
      map(response => {
        return response;
      }),
      catchError((error: any) => throwError(error))
    );
  }

  public getOrderById(orderId: number) {

    return this.http.get<any>(`${this.baseApiUrl}/${orderId}`).pipe(
      map(response => {
        return response;
      }),
      catchError((error: any) => throwError(error))
    );
  }

  public getOrderSummaryById(orderId: number) {

    return this.http.get<any>(`${this.baseApiUrl}/summary/${orderId}`).pipe(
      map(response => {
        return response;
      }),
      catchError((error: any) => throwError(error))
    );
  }

  public updateOrderStatus(orderId: number, statusId: number) {

    return this.http.put<any>(`${this.baseApiUrl}/update/${orderId}/status/${statusId}`, null).pipe(
      map(response => {
        return response;
      }),
      catchError((error: any) => throwError(error))
    );
  }
}
