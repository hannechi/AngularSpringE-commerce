import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './vitrine/header/header.component';
import { BodyComponent } from './vitrine/body/body.component';
import { FooterComponent } from './vitrine/footer/footer.component';
import { AllvitrineComponent } from './vitrine/allvitrine/allvitrine.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ErrorPathRoutingComponent } from './error-path-routing/error-path-routing.component';
import { AdminpanelComponent } from './admin/adminpanel/adminpanel.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { AddproductComponent } from './admin/addproduct/addproduct.component';
import { UpdateproductComponent } from './admin/updateproduct/updateproduct.component';
import { ShowproductComponent } from './admin/showproduct/showproduct.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    AllvitrineComponent,
    LoginComponent,
    ErrorPathRoutingComponent,
    AdminpanelComponent,
    SidebarComponent,
    AddproductComponent,
    UpdateproductComponent,
    ShowproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
