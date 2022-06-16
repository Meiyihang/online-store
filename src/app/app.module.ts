import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from 'src/pages/home/home.component';
import { MenComponent } from 'src/pages/men/men.component';
import { WomenComponent } from 'src/pages/women/women.component';
import { KidsComponent } from 'src/pages/kids/kids.component';
import { LoginComponent } from './login/login.component';
import { FormComponentComponent } from './form-component/form-component/form-component.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactusComponent } from 'src/pages/contactus/contactus.component';
import { OurpoliciesComponent } from 'src/pages/ourpolicies/ourpolicies.component';
import { ProductComponent } from './product/product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    MenComponent,
    WomenComponent,
    KidsComponent,
    ContactusComponent,
    OurpoliciesComponent,
    LoginComponent,
    FormComponentComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatListModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
