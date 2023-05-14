import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bank } from 'src/app/models/bank/bank';
import { ListResponseModel } from 'src/app/models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BankService {
  apiUrl='https://localhost:7166/api/Banks/getall';

  constructor(private httpClient:HttpClient) {}

  getBank():Observable<ListResponseModel<Bank>>{
    return this.httpClient.get<ListResponseModel<Bank>>(this.apiUrl)
  }
}
