import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { AddProductsComponent } from './components/add-products/add-products.component';
import { EditProductsComponent } from './components/edit-products/edit-products.component';
import { DeleteProductsComponent } from './components/delete-products/delete-products.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { EditUsersComponent } from './components/edit-users/edit-users.component';
import { DeleteUsersComponent } from './components/delete-users/delete-users.component';
import { ListRolesComponent } from './components/list-roles/list-roles.component';
import { EditRolesComponent } from './components/edit-roles/edit-roles.component';
import { DeleteRolesComponent } from './components/delete-roles/delete-roles.component';
import { AddRolesComponent } from './components/add-roles/add-roles.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ListProductsComponent,
    AddProductsComponent,
    EditProductsComponent,
    DeleteProductsComponent,
    ListUsersComponent,
    EditUsersComponent,
    DeleteUsersComponent,
    ListRolesComponent,
    EditRolesComponent,
    DeleteRolesComponent,
    AddRolesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
