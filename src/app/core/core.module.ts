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
import { GraphQLModule } from './graphql/graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CrudStore } from './store/crud/crud.store';
import { AuthService } from './services/auth/auth.service';
import { FlexModule } from '@angular/flex-layout';
import { IsLoadingService } from '@service-work/is-loading';
import { EnvServiceProvider } from '../env/env.service.provider';
import { UpdateService } from './services/update/update.service';
import { ShoppingListRoutesService } from './state/shopping-list-route/shopping-list-routes.service';
import { HammerConfig } from './hammer.config';


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
    FlexModule,
    GraphQLModule
  ],
  exports: [CoreRoutingModule, AppLayoutModule, BrowserAnimationsModule],
  providers: [
    AuthService,
    CrudStore,
    IsLoadingService,
    {
      provide: ErrorHandler,
      useClass: ErrorService,
    },
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: HammerConfig
    },
    EnvServiceProvider,
    UpdateService,
    ShoppingListRoutesService
  ],
  entryComponents: [IosInstallComponent]
})
export class CoreModule { }
