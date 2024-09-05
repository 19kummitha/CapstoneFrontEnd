import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { ResidentloginComponent } from './components/residentlogin/residentlogin.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { DashboardComponent } from './components/modules/adminmodule/dashboard/dashboard.component';
import { CalendarComponent } from './components/modules/sharedmodule/calendar/calendar.component';
import { ServiceloginComponent } from './components/servicelogin/servicelogin.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    AdminloginComponent,
    ResidentloginComponent,
    SignupComponent,
    DashboardComponent,
    CalendarComponent,
    ServiceloginComponent
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
