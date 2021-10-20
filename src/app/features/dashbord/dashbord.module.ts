import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashbordComponent } from './infrastructure/ui/dashbord/dashbord.component';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import { ToolBarComponent } from './infrastructure/ui/tool-bar/tool-bar.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ProfileComponent } from './infrastructure/ui/profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
const routes:Routes= [
  {
    path:'',
    component:ToolBarComponent,
    children:[

        {
          path:'profile',
          component:ProfileComponent
        },
        {
          path:'',
          component:DashbordComponent
        }

    ]
  },

]


@NgModule({
  declarations: [
    DashbordComponent,
    ToolBarComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FlexLayoutModule,
    RouterModule.forChild(routes),
    NgApexchartsModule,
    HttpClientModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class DashbordModule { }
