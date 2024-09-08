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
import { AdmindashboardComponent } from './components/modules/admindashboard/admindashboard.component';
import { ResidentdashboardComponent } from './components/modules/residentdashboard/residentdashboard.component';
import { ServicedashboardComponent } from './components/modules/servicedashboard/servicedashboard.component';
import { AdminheaderComponent } from './components/modules/admindashboard/adminheader/adminheader.component';
import { AdminfooterComponent } from './components/modules/admindashboard/adminfooter/adminfooter.component';
import { AdminsidenavComponent } from './components/modules/admindashboard/adminsidenav/adminsidenav.component';
import { AdmincontactComponent } from './components/modules/admindashboard/admincontact/admincontact.component';

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
    ResidentdashboardComponent,
    ServicedashboardComponent,
    AdminheaderComponent,
    AdminfooterComponent,
    AdminsidenavComponent,
    AdmincontactComponent
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
