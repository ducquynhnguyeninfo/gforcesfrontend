import { HttpClient, HttpParams } from '@angular/common/http';
import { ApiConfiguration } from './api-configuration';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
/**
 * Base class for API services
 */
export class BaseService<T> {
  constructor(
    protected config: ApiConfiguration,
    protected http: HttpClient
  ) {
  }

  // tslint:disable-next-line: variable-name
  private base_url = '';

  /**
   * Returns the root url for API operations. If not set directly in this
   * service, will fallback to ApiConfiguration.rootUrl.
   */
  get baseUrl(): string {
    return this.base_url || this.config.rootUrl;
  }

  /**
   * Sets the root URL for API operations in this service.
   */
  set baseUrl(baseUrl: string) {
    this.base_url = baseUrl;
  }

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(`${this.baseUrl}/`);
  }

  get(id: any): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${id}`);
  }

  create(data: any): Observable<T> {
    return this.http.post<T>(this.baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(this.baseUrl);
  }
}
