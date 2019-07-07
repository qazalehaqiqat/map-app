import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StopsPage } from './stops.page';
import { Tab1Page } from './tab1/tab1.page';

const routes: Routes = [
  {
    path: '',
    component: StopsPage,
 
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  

  ],
  declarations: [StopsPage]
})
export class StopsPageModule {}
