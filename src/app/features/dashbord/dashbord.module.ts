import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashbordComponent } from './infrastructure/ui/dashbord/dashbord.component';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import { ToolBarComponent } from './infrastructure/ui/tool-bar/tool-bar.component';
const routes:Routes= [
  {
    path:'',
    component:DashbordComponent,
  }
]


@NgModule({
  declarations: [
    DashbordComponent,
    ToolBarComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FlexLayoutModule,
    RouterModule.forChild(routes)
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class DashbordModule { }
