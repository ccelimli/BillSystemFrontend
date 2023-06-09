import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { Platform } from 'src/app/models/platform/platform';

@Injectable({
  providedIn: 'root'
})
export class PlatformService {
  apiUrl='https://localhost:7166/api/Platforms/getall'
  constructor(private httpClient:HttpClient) { }

  getPlatforms():Observable<ListResponseModel<Platform>>{
    return this.httpClient.get<ListResponseModel<Platform>>(this.apiUrl);
  }
}
