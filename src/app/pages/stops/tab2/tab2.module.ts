import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Tab2Page } from './tab2.page';

const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
    children:[
 
      { path: 'num1', loadChildren: './num1/num1.module#Num1PageModule' },
      { path: 'num2', loadChildren: './num2/num2.module#Num2PageModule' },
      { path: 'num3', loadChildren: './num3/num3.module#Num3PageModule' },
      {
        path:'',
        redirectTo:'/tab2/num1',
        pathMatch:'full'
      }
  ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
