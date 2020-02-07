import { Component, OnInit, OnDestroy } from '@angular/core';
import { GetShoppingListsGQL, Shopping_List, GetFavouriteShoppingListGQL } from 'src/generated/graphql';
import { Subject, Observable } from 'rxjs';
import { takeUntil, map, distinctUntilChanged } from 'rxjs/operators';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {



  /**
   *Creates an instance of HomeComponent.
   * @param {GetShoppingListsGQL} shoppingListService
   * @memberof HomeComponent
   */
  constructor(private auth: AuthService, private router: Router) {

  }


  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------


  ngOnInit() {

    console.log("home page, logged in:" + this.auth.loggedIn)
    if (this.auth.loggedIn) {
      this.router.navigateByUrl('/shopping-list');
    }

  }


}
