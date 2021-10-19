import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './infrastructure/ui/login/login.component';
import { RegisterComponent } from './infrastructure/ui/register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../angular-material/angular-material.module';


const routes:Routes=[
  {
    path:'',
    component:LoginComponent,
  },
  {
    path:'register',
    component:RegisterComponent
  }
]
@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule, ReactiveFormsModule,
    AngularMaterialModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AuthentificationModule { }
