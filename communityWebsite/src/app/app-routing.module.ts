import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent}  from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {ContactComponent} from './components/contact/contact.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { ResidentloginComponent } from './components/residentlogin/residentlogin.component';
import { SignupComponent } from './components/signup/signup.component';
import { ServiceloginComponent } from './components/servicelogin/servicelogin.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'residentlogin',component:ResidentloginComponent},
  {path:'signup',component:SignupComponent},
  {path:'servicelogin',component:ServiceloginComponent}
  // { path: '', redirectTo: '/signup', pathMatch: 'full' },
  // { path: '', redirectTo: '/residnetlogin', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
