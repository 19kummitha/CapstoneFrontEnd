import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent}  from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {ContactComponent} from './components/contact/contact.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';

import { AuthGuard } from './guards/auth.guard';

import { AdmindashboardComponent } from './components/modules/admin/admindashboard/admindashboard.component';
import { AdmincontactComponent } from './components/modules/admin/admincontact/admincontact.component';
import { AdminComponent } from './components/modules/admin/admin.component';
import { ResidentComponent } from './components/modules/resident/resident.component';
import { ServiceproviderComponent } from './components/modules/serviceprovider/serviceprovider.component';



const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {
    path: 'dashboard/admin',
    component: AdminComponent,
    children: [
        { path: '', component: AdmindashboardComponent },
      { path: 'admincontact', component: AdmincontactComponent },  // Child route for contact page
      
    ], 
    canActivate: [AuthGuard],
    data: { role: 'Admin' }
  },
  // Wildcard route for handling unknown routes
  
  {
    path:'dashboard/resident',
    component:ResidentComponent,
    canActivate:[AuthGuard],
    data:{role:'User'}
  },
  {path:'dashboard/serviceprovider',
  component:ServiceproviderComponent,
  canActivate:[AuthGuard],
  data:{role:'ServiceProvider'
}},
{ path: '**', redirectTo: '', pathMatch: 'full' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule 
{
  
}
