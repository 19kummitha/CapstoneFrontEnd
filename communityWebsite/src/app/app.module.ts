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
import { ViewcomplaintsComponent } from './components/modules/admin/viewcomplaints/viewcomplaints.component';
import { EventsComponent } from './components/modules/admin/events/events.component';
import { SendnotificationsComponent } from './components/modules/admin/sendnotifications/sendnotifications.component';
import { CreatepostComponent } from './components/modules/admin/createpost/createpost.component';
import { ViewpostComponent } from './components/modules/admin/viewpost/viewpost.component';
import { RequestserviceComponent } from './components/modules/admin/requestservice/requestservice.component';
import { AddserviceproviderComponent } from './components/modules/admin/addserviceprovider/addserviceprovider.component';
import { ViewmembersComponent } from './components/modules/admin/viewmembers/viewmembers.component';
import { AddmembersComponent } from './components/modules/admin/addmembers/addmembers.component';

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
    ServiceproviderComponent,
    ViewcomplaintsComponent,
    EventsComponent,
    SendnotificationsComponent,
    CreatepostComponent,
    ViewpostComponent,
    RequestserviceComponent,
    AddserviceproviderComponent,
    ViewmembersComponent,
    AddmembersComponent,
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
