//Blatently ripped off from here:
//https://www.jvandemo.com/how-to-use-environment-variables-to-configure-your-angular-application-without-a-rebuild/

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvService {

  // The values that are defined here are the default values that can
  // be overridden by env.js

  // API url
  public apiUrl = '';

  public auth0_domain = "";
  public auth0_client_id = "";
  public auth0_audience = '';




  // Whether or not to enable debug mode
  public enableDebug = true;

  constructor() {
  }

}
