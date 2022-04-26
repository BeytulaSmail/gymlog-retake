import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { RoutinesComponent } from './pages/routines/routines.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'routines', component : RoutinesComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'profile', component: ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
