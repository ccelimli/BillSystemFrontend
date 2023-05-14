import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bill } from 'src/app/models/bill/bill-details';
import { ListResponseModel } from 'src/app/models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BillService {
  apiUrl='https://localhost:7166/api/'
  constructor(private httpClient:HttpClient) { }

  getBills():Observable<ListResponseModel<Bill>>{
    let newPath=this.apiUrl+"bills/getbilldetails"
    return this.httpClient.get<ListResponseModel<Bill>>(newPath);
  }
  getBillsByCategory(categoryId:number):Observable<ListResponseModel<Bill>>{
    let newPath=this.apiUrl+"Bills/getdetailbycategoryid?categoryId="+categoryId
    return this.httpClient.get<ListResponseModel<Bill>>(newPath);
  }
}

