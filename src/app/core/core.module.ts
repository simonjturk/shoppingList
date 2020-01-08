import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { CoreRoutingModule } from './core-routing.module';
import { AppLayoutModule } from './layout/layout.module';
import { Error500Component } from './pages/error500/error500.component';
import { Error404Component } from './pages/error404/error404.component';
import { ErrorService } from './services/error.service';

@NgModule({
  declarations: [HomeComponent, Error500Component, Error404Component],
  imports: [
    CommonModule,
    CoreRoutingModule,
    AppLayoutModule
  ],
  exports:[CoreRoutingModule, AppLayoutModule],
  providers: [
    {
     provide: ErrorHandler,
     useClass: ErrorService,
    },
   ]
})
export class CoreModule { }
