import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { AnimalShelter } from 'src/app/models/animal-shelter/animal-shelter';
@Injectable({
  providedIn: 'root'
})
export class AnimalShelterService {
  apiUrl="https://localhost:7166/api/animalshelters/getanimalshelterdetails"

  constructor(private httpClient:HttpClient) { }


  getAnimalShelter():Observable<ListResponseModel<AnimalShelter>>{
    return this.httpClient.get<ListResponseModel<AnimalShelter>>(this.apiUrl);
  }
}
