import { Component } from '@angular/core';
import { AnimalShelter } from 'src/app/models/animal-shelter/animal-shelter';
import { AnimalShelterService } from 'src/app/services/animalShelter/animal-shelter.service';

@Component({
  selector: 'app-animal-shelter',
  templateUrl: './animal-shelter.component.html',
  styleUrls: ['./animal-shelter.component.css']
})

export class AnimalShelterComponent {
 animalShelters:AnimalShelter[]=[];
 dataLoaded=false;
 constructor(private animalShelterService:AnimalShelterService){}

 ngOnInit():void{
  this.getAnimalShelters();
 }

 getAnimalShelters(){
  this.animalShelterService.getAnimalShelter().subscribe(response=>{
    this.animalShelters=response.data;
    this.dataLoaded=true;
  })
 }
}
