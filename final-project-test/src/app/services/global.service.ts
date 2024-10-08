import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  fullName = (localStorage.getItem('userName')) ? (localStorage.getItem('userName')) : null;
  isLogin = (localStorage.getItem('userToken')) ? true : false;
  private baseUrl = 'http://techs-experts.net/public/api/products-by-category/';
  private Url = 'http://techs-experts.net/public/api/';

  constructor(private http : HttpClient) { }

  getCategory():Observable<any>{
    return this.http.get(`http://techs-experts.net/public/api/top-categories`)
  }

  getSingleCategory(categoryId: any):Observable<any>{
    const url = `${this.baseUrl}${categoryId}/0/0`
    return this.http.get<any>(url);
  }
  getCountries():Observable<any>{
    return this.http.get(`${this.Url}countries`)
  }
  getGovernorates(id : any):Observable<any>{
    return this.http.get(`${this.Url}governorates/${id}`)
  }
  getCities(id : any):Observable<any>{
    return this.http.get(`${this.Url}cities/${id}`)
  }

  getListCategories():Observable<any>{
    return this.http.get(`${this.Url}categories/asc`)
  }
  getSingleProduct(id : any):Observable<any>{
    return this.http.get(`${this.Url}single-product/${id}`)
  }

  // getSingleCategory(id:any):Observable<any>{
  //   return this.http.get(`http://techs-experts.net/public/api/products-by-category/`)
  // }
}
