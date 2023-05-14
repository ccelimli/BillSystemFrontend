import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimalShelterComponent } from './components//animal-shelter/animal-shelter.component';
import { BankComponent } from './components/bank/bank.component';
import { BillComponent } from './components/bill/bill.component';
import { BillImageComponent } from './components/bill-image/bill-image.component';
import { CategoryComponent } from './components/category/category.component';
import { CityComponent } from './components/city/city.component';
import { FaqComponent } from './components/faq/faq.component';
import { FoundationComponent } from './components/foundation/foundation.component';
import { InstitutionComponent } from './components/institution/institution.component';
import { PlatformComponent } from './components/platform/platform.component';
import { UserComponent } from './components/user/user.component';
import { NaviComponent } from './components/navi/navi.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthComponent } from './components/auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimalShelterComponent,
    BankComponent,
    BillComponent,
    BillImageComponent,
    CategoryComponent,
    CityComponent,
    FaqComponent,
    FoundationComponent,
    InstitutionComponent,
    PlatformComponent,
    UserComponent,
    NaviComponent,
    HeaderComponent,
    FooterComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
