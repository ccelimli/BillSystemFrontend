import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { AnimalShelterComponent } from './components/animal-shelter/animal-shelter.component';
import { BillComponent } from './components/bill/bill.component';
import { FoundationComponent } from './components/foundation/foundation.component';
import { CategoryComponent } from './components/category/category.component';
import { AuthComponent } from './components/auth/auth.component';

const routes: Routes = [
  {path:"",pathMatch:"full", component:HeaderComponent},
  {path:"animal-shelters", component:AnimalShelterComponent},
  {path:"bills", component:BillComponent},
  {path:"foundation", component:FoundationComponent},
  {path:"categories", component:CategoryComponent},
  {path:"bills/categories/:categoryId", component:BillComponent},
  {path:"login", component:AuthComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
