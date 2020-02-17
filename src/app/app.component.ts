import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IosInstallComponent } from './core/components/ios-install/ios-install.component';
import { Observable } from 'rxjs';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { IsLoadingService } from '@service-work/is-loading';
import { filter } from 'rxjs/operators';
import { UpdateService } from './core/services/update/update.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'OA Shopping List';



  constructor(
    private toast: MatSnackBar, private update: UpdateService
  ) {


  }


  ngOnInit() {
    // Detects if device is on iOS 
    const isIos = () => {
      const userAgent = window.navigator.userAgent.toLowerCase();
      return /iphone|ipad|ipod/.test(userAgent);
    }
    // Detects if device is in standalone mode
    const isInStandaloneMode = () => ('standalone' in (window as any).navigator) && ((window as any).navigator.standalone);

    // Checks if should display install popup notification:
    if (isIos() && !isInStandaloneMode()) {
      this.toast.openFromComponent(IosInstallComponent, {
        duration: 8000,
        horizontalPosition: 'start',
        panelClass: ['mat-elevation-z3']
      });
    }

  }


}


