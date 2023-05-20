import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModelService {
  path="http://localhost:5133/api/Models/getAll";

  constructor(private httpClient:HttpClient) { }

  getModels():Observable<any[]>{
    return this.httpClient.get<any[]>(this.path);
  }
}
