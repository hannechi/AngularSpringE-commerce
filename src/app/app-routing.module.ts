import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllvitrineComponent } from './vitrine/allvitrine/allvitrine.component';
import { LoginComponent } from './login/login.component';
import { ErrorPathRoutingComponent } from './error-path-routing/error-path-routing.component';
import { AdminpanelComponent } from './admin/adminpanel/adminpanel.component';
import { AddproductComponent } from './admin/addproduct/addproduct.component';
import { ShowproductComponent } from './admin/showproduct/showproduct.component';
import { UpdateproductComponent } from './admin/updateproduct/updateproduct.component';




const routes: Routes = [
  {path:"vitrine",redirectTo:'/',pathMatch:'full'},
  {path:"",component:AllvitrineComponent},
  {path:"login",component:LoginComponent},
  {path:"admin",component:AdminpanelComponent,children:
    [
      {path:"addproduct",component:AddproductComponent},
      {path:"showproduct",component:ShowproductComponent},
      {path:"updateproduct/:id",component:UpdateproductComponent},

    ]},
  {path:"**",component:ErrorPathRoutingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
