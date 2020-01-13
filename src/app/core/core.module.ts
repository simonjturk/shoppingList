import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { CoreRoutingModule } from './core-routing.module';
import { AppLayoutModule } from './layout/layout.module';
import { Error500Component } from './pages/error500/error500.component';
import { Error404Component } from './pages/error404/error404.component';
import { ErrorService } from './services/error.service';
import { IosInstallComponent } from './components/ios-install/ios-install.component';
import { MatIconModule } from '@angular/material/icon';
import { GraphQLModule } from '../graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [HomeComponent, Error500Component, Error404Component, IosInstallComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    CoreRoutingModule,
    AppLayoutModule,
    MatIconModule,
    HttpClientModule,
    GraphQLModule
  ],
  exports:[CoreRoutingModule, AppLayoutModule],
  providers: [
    {
     provide: ErrorHandler,
     useClass: ErrorService,
    },
   ],
   entryComponents: [IosInstallComponent]
})
export class CoreModule { }
