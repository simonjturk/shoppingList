import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from '../../services/auth/auth.service';
import { UpdateService } from '../../services/update/update.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, public auth: AuthService, public updateService: UpdateService) { }


  ngOnInit(): void {
    if (!this.auth.loggedIn) {
      // this.auth.login();
    }
  }

  login() {
    this.auth.login();

    this.auth.userProfile$.subscribe(u => {
      console.log(u);
    })

    this.auth.getTokenSilently$().subscribe(t => {
      console.log(t);
    }, err => {
      throw new Error("fuckit: " + err)
    })
  }
}
