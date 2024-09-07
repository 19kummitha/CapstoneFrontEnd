import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent}  from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {ContactComponent} from './components/contact/contact.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';

import { AuthGuard } from './guards/auth.guard';
import { AdmindashboardComponent } from './components/modules/admindashboard/admindashboard.component';
import { ServicedashboardComponent } from './components/modules/servicedashboard/servicedashboard.component';
import { ResidentdashboardComponent } from './components/modules/residentdashboard/residentdashboard.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'dashboard/admindashboard',component:AdmindashboardComponent,canActivate:[AuthGuard],data:{role:'Admin'}},
  {path:'dashboard/residentdashboard',component:ResidentdashboardComponent,canActivate:[AuthGuard],data:{role:'User'}},
  {path:'dashboard/serviceproviderdashboard',component:ServicedashboardComponent,canActivate:[AuthGuard],data:{role:'ServiceProvider'}},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule 
{
  
}
