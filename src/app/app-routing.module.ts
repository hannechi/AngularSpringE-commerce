import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllvitrineComponent } from './vitrine/allvitrine/allvitrine.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:"vitrine",redirectTo:'/',pathMatch:'full'},
  {path:"",component:AllvitrineComponent},
  {path:"login",component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
