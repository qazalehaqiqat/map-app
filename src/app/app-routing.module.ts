import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'schedule', loadChildren: './pages/schedule/schedule.module#SchedulePageModule' },
  { path: 'stops', loadChildren: './pages/stops/stops.module#StopsPageModule' },
  { path: 'img', loadChildren: './pages/schedule/img/img.module#ImgPageModule' },
  { path: 'setting', loadChildren: './pages/setting/setting.module#SettingPageModule' },
  { path: 'tab1', loadChildren: './pages/stops/tab1/tab1.module#Tab1PageModule' },
  { path: 'number1', loadChildren: './pages/stops/tab1/number1/number1.module#Number1PageModule' },
  { path: 'number2', loadChildren: './pages/stops/tab1/number2/number2.module#Number2PageModule' },
  { path: 'number3', loadChildren: './pages/stops/tab1/number3/number3.module#Number3PageModule' },
  { path: 'tab2', loadChildren: './pages/stops/tab2/tab2.module#Tab2PageModule' },
  { path: 'num1', loadChildren: './pages/stops/tab2/num1/num1.module#Num1PageModule' },
  { path: 'num2', loadChildren: './pages/stops/tab2/num2/num2.module#Num2PageModule' },
  { path: 'num3', loadChildren: './pages/stops/tab2/num3/num3.module#Num3PageModule' },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
