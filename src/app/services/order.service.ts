import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderApiService } from '../repositories/api/order-api.service';
import { Order } from '../repositories/models/order.model';
import { OrderVO } from '../repositories/vo/order-vo.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private api: OrderApiService) {
  }

  getAll(): Observable <Order[]> {
    return this.api.getAll();
  }

  create(vo: OrderVO): Observable<Order> {
    return this.api.create(vo);
  }

  update(vo: OrderVO): Observable<Order> {
    return this.api.update(vo.id, vo);
  }

  delete(vo: OrderVO): Observable<Order> {
    return this.api.delete(vo.id);
  }

}
