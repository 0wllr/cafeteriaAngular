import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProductsComponent } from './components/products/products.component';
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
  {
    path:'products',
    component : ProductsComponent,
    canActivate : [AfterLoginService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
