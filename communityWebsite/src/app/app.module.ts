import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';

import { LoginComponent } from './components/login/login.component';


import { AdminComponent } from './components/modules/admin/admin.component';
import { AdmindashboardComponent } from './components/modules/admin/admindashboard/admindashboard.component';
import { AdminheaderComponent } from './components/modules/admin/adminheader/adminheader.component';
import { AdminfooterComponent } from './components/modules/admin/adminfooter/adminfooter.component';
import { AdminsidenavComponent } from './components/modules/admin/adminsidenav/adminsidenav.component';
import { AdmincontactComponent } from './components/modules/admin/admincontact/admincontact.component';
import { ResidentComponent } from './components/modules/resident/resident.component';
import { ServiceproviderComponent } from './components/modules/serviceprovider/serviceprovider.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    SignupComponent,
    LoginComponent,
    AdmindashboardComponent,
    AdminheaderComponent,
    AdminfooterComponent,
    AdminsidenavComponent,
    AdmincontactComponent,
    AdminComponent,
    AdminComponent,
    ResidentComponent,
    ServiceproviderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
