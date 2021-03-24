import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BrandApiService } from '../repositories/api/brand-api.service';
import { Brand } from '../repositories/models/brand.model';
import { BrandVO } from '../repositories/vo/brand-vo.model';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private api: BrandApiService) {
  }

  getAllBrands(): Observable <Brand[]> {
    return this.api.getAll();
  }

  create(vo: BrandVO): Observable<Brand> {
    return this.api.create(vo);
  }

  update(vo: BrandVO): Observable<Brand> {
    return this.api.update(vo.id, vo);
  }

  delete(brand: Brand): Observable<Brand> {
    return this.api.delete(brand.id);
  }

}
