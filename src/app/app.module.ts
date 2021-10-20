import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgApexchartsModule } from 'ng-apexcharts';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderComponent } from './utiles/loader/ui/loader/loader.component';
import { LoderInterceptor } from './utiles/loader/loder.interceptor';
import { AuthGuard } from './core/guards/auth.guard';
 const routes: Routes = [
   {
     path:'',
     loadChildren : ()=> import('@frontEndAssignments/authentification/login').then((m)=>m.AuthentificationModule)
   },
   {
     path:'dashbord',
     loadChildren : ()=> import('@frontEndAssignments/features/dashbord').then((m)=>m.DashbordModule),
     canActivate:[AuthGuard]
   }
 ]
@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FlexLayoutModule,
    AngularMaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgApexchartsModule,
    HttpClientModule
  ],
  providers: [  { provide: HTTP_INTERCEPTORS, useClass: LoderInterceptor, multi: true },],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
