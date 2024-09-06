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
import { AdmindashboardComponent } from './components/modules/adminmodule/admindashboard/admindashboard.component';
import { ResidentdashboardComponent } from './components/modules/residentmodule/residentdashboard/residentdashboard.component';
import { ServiceproviderdashboardComponent } from './components/modules/serviceprovider/serviceproviderdashboard/serviceproviderdashboard.component';
import { AdminheaderComponent } from './components/modules/adminmodule/admindashboard/adminheader/adminheader.component';
import { AdminfooterComponent } from './components/modules/adminmodule/admindashboard/adminfooter/adminfooter.component';
import { AdminsidenavComponent } from './components/modules/adminmodule/admindashboard/adminsidenav/adminsidenav.component';

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
    ServiceproviderdashboardComponent,
    AdminheaderComponent,
    AdminfooterComponent,
    AdminsidenavComponent
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
