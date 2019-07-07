import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
    children:[
      { path: 'number1', loadChildren: './number1/number1.module#Number1PageModule' },
      { path: 'number2', loadChildren: './number2/number2.module#Number2PageModule' },
      { path: 'number3', loadChildren: './number3/number3.module#Number3PageModule' },
      {
        path:'',
        redirectTo:'/tab1/number1',
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
    RouterModule.forChild(routes),
    
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
