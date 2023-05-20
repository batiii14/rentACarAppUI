import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  path = "http://localhost:5133/api/Brands/getAll";

  constructor(private httpClient:HttpClient) { }

  getBrands():Observable<any[]>{
    return this.httpClient.get<any[]>(this.path);
  }
}
