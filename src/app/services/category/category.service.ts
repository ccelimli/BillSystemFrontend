import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/category/category';
import { ListResponseModel } from 'src/app/models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrl='https://localhost:7166/api/Categories/getall'

  constructor(private htpClient:HttpClient) { }

  getCategories():Observable<ListResponseModel<Category>>{
    return this.htpClient.get<ListResponseModel<Category>>(this.apiUrl);
  }
}
