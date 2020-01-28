import { Injectable, ErrorHandler, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http'
import { GraphQLError } from 'graphql';
@Injectable({
  providedIn: 'root'
})
export class ErrorService implements ErrorHandler {
  constructor(private injector: Injector) { }
  handleError(error: any) {
    const router = this.injector.get(Router);
    if (Error instanceof HttpErrorResponse) {
      console.error(error.status);
    }
    else if (Error instanceof GraphQLError) {
      console.error(error)
    }
    else {
      console.error(error);
      //DISABLE FOR DEV router.navigate(['error500']);
    }

  }
}