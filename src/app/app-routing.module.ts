import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AddProductsComponent } from './components/add-products/add-products.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { EditProductsComponent } from './components/edit-products/edit-products.component';
import { AddRolesComponent } from './components/add-roles/add-roles.component';
import { ListRolesComponent } from './components/list-roles/list-roles.component';
import { EditRolesComponent } from './components/edit-roles/edit-roles.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { EditUsersComponent } from './components/edit-users/edit-users.component';
import { BeforeLoginService } from './services/before-login.service';
import { AfterLoginService } from './services/after-login.service';

const routes: Routes = [


  {
    path:'login',
    component : LoginComponent,
    canActivate : [BeforeLoginService]
  },
  {
    path:'register',
    component : RegisterComponent,
    canActivate : [BeforeLoginService]
  },
///////////////////////////////////////////////////
  {
    path:'add/products',
    component : AddProductsComponent,
    canActivate : [AfterLoginService]
  },
  {
    path:'list/products',
    component : ListProductsComponent,
    canActivate : [AfterLoginService]
  },
  {
    path:'edit/products/:id',
    component : EditProductsComponent,
    canActivate : [AfterLoginService]
  },

//////////////////////////////////////////////////
  {
    path:'add/roles',
    component : AddRolesComponent,
    canActivate : [AfterLoginService]
  },
  {
    path:'list/roles',
    component : ListRolesComponent,
    canActivate : [AfterLoginService]
  },
  {
    path:'edit/:id',
    component : EditRolesComponent,
    canActivate : [AfterLoginService]
  },

//////////////////////////////////////////////////
  {
    path:'list/users',
    component : ListUsersComponent,
    canActivate : [AfterLoginService]
  },
  {
    path:'edit/:id',
    component : EditUsersComponent,
    canActivate : [AfterLoginService]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
