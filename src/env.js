(function (window) {
  window.__env = window.__env || {};

  // API url
  window.__env.apiUrl = 'https://oa-shopping-list.herokuapp.com/v1/graphql';


  //Auth0
  window.__env.auth0_domain = "oatech.au.auth0.com";
  window.__env.auth0_client_id = "mhCkLBwrZKCjzShkmyIzOWxemlfWewkN";
  window.__env.auth0_audience = 'https://oa-shopping-list.herokuapp.com';


  //Other
  // Whether or not to enable debug mode
  // Setting this to false will disable console output
  window.__env.enableDebug = true;
}(this));
