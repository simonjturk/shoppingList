import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Error500Component } from './pages/error500/error500.component';
import { Error404Component } from './pages/error404/error404.component';


export const routes: Routes = [
  {path: '',redirectTo: '/home',pathMatch:'full'},
  //{path:'home',component:HomeComponent},

  //Lazy Load modules
  { 
    path: 'home', 
    loadChildren: () => import('../modules/routed/home/home.module').then(m => m.HomeModule) 
  },
  { 
    path: 'shopping-list', 
    loadChildren: () => import('../modules/routed/shopping-list/shopping-list.module').then(m => m.ShoppingListModule) 
  },

  {path:'error500',component: Error500Component},
  {path: '404', component: Error404Component},
  {path: '**', redirectTo: '/404'}
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class CoreRoutingModule { }
