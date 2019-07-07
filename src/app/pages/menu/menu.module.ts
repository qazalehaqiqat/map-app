import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';
import { Map } from 'mapir-angular';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
  }
  
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    Map
  
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
