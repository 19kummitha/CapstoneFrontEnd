import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';

import { AuthGuard } from './guards/auth.guard';

import { AdmindashboardComponent } from './components/modules/admin/admindashboard/admindashboard.component';
import { AdmincontactComponent } from './components/modules/admin/admincontact/admincontact.component';
import { AdminComponent } from './components/modules/admin/admin.component';
import { ResidentComponent } from './components/modules/resident/resident.component';
import { ServiceproviderComponent } from './components/modules/serviceprovider/serviceprovider.component';
import { ViewmembersComponent } from './components/modules/admin/viewmembers/viewmembers.component';
import { AddmembersComponent } from './components/modules/admin/addmembers/addmembers.component';
import { RequestserviceComponent } from './components/modules/admin/requestservice/requestservice.component';
import { AddserviceproviderComponent } from './components/modules/admin/addserviceprovider/addserviceprovider.component';
import { CreatepostComponent } from './components/modules/admin/createpost/createpost.component';
import { ViewpostComponent } from './components/modules/admin/viewpost/viewpost.component';
import { SendnotificationsComponent } from './components/modules/admin/sendnotifications/sendnotifications.component';
import { ViewcomplaintsComponent } from './components/modules/admin/viewcomplaints/viewcomplaints.component';
import { VieweventsComponent } from './components/modules/admin/viewevents/viewevents.component';
import { AddeventsComponent } from './components/modules/admin/addevents/addevents.component';
import { ResidentdashboardComponent } from './components/modules/resident/residentdashboard/residentdashboard.component';
import { ServiceproviderdashboardComponent } from './components/modules/serviceprovider/serviceproviderdashboard/serviceproviderdashboard.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'dashboard/admin',
    component: AdminComponent,
    children: [
      { path: '', component: AdmindashboardComponent },
      { path: 'viewmembers', component: ViewmembersComponent },
      { path: 'addmembers', component: AddmembersComponent },
      { path: 'requestservice', component: RequestserviceComponent },
      { path: 'addserviceprovider', component: AddserviceproviderComponent },
      { path: 'createpost', component: CreatepostComponent },
      { path: 'viewpost', component: ViewpostComponent },
      { path: 'sendnotification', component: SendnotificationsComponent },
      { path: 'viewevents', component: VieweventsComponent },
      { path: 'addevents', component: AddeventsComponent },
      { path: 'complaints', component: ViewcomplaintsComponent },
      { path: 'admincontact', component: AdmincontactComponent },
    ],
    canActivate: [AuthGuard],
    data: { role: 'Admin' }
  },
  // Wildcard route for handling unknown routes

  {
    path: 'dashboard/resident',
    component: ResidentComponent,
    children: [
      { path: '', component: ResidentdashboardComponent },
    ],
    canActivate: [AuthGuard],
    data: { role: 'User' }
  },




  {
    path: 'dashboard/serviceprovider',
    component: ServiceproviderComponent,
    children: [
      { path: '', component: ServiceproviderdashboardComponent },
    ], 
    canActivate: [AuthGuard],
    data: {
      role: 'ServiceProvider'
    }
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
