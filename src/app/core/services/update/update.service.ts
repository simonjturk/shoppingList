import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(private swUpdate: SwUpdate, private snackbar: MatSnackBar) {

    this.checkForUpdates()

  }

  checkForUpdates() {
    this.swUpdate.available.subscribe(evt => {

      this.swUpdate.activateUpdate

      const snack = this.snackbar.open('Update Available', 'Reload');

      snack
        .onAction()
        .subscribe(() => {
          this.forceUpdate();//swUpdate.activateUpdate().then(() => document.location.reload());
        });


    });


  }

  private forceUpdate() {
    this.swUpdate.activateUpdate().then(() => document.location.reload());

  }

}
