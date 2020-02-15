import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { TemplateComponent } from './template/template.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatProgressBarModule } from '@angular/material/progress-bar'

@NgModule({
  declarations: [NavbarComponent, TemplateComponent, FooterComponent, ContentComponent],
  imports: [
    RouterModule,
    CommonModule,
    LayoutModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,

    MatProgressBarModule
  ],
  exports: [NavbarComponent, TemplateComponent, FlexLayoutModule]
})
export class AppLayoutModule { }
