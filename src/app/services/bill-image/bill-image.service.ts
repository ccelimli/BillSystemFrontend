import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BillImage } from 'src/app/models/bill-image/bill-image';
import { ListResponseModel } from 'src/app/models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BillImageService {
  apiUrl='https://localhost:7166/api/BillImages/getall';
  constructor(private httpClient:HttpClient) { }

  getBillImage():Observable<ListResponseModel<BillImage>>{
    return this.httpClient.get<ListResponseModel<BillImage>>(this.apiUrl);
  }
}
