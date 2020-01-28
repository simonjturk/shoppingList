import { NgModule } from '@angular/core';
import { ApolloModule, Apollo, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink, concat } from 'apollo-link';

import { errorLink } from './middleware/error'
import { from } from 'zen-observable';


const uri = 'https://oa-shopping-list.herokuapp.com/v1/graphql';//'http://localhost:8080/v1/graphql'; // <-- add the URL of the GraphQL server here
//const uri = 'http://localhost:8080/v1/graphql'; // <-- add the URL of the GraphQL server here
export function createApollo(httpLink: HttpLink) {


  const http = httpLink.create({
    uri: uri,
    withCredentials: true
  });

  return {
    link: concat(errorLink, http),//httpLink.create({uri}),
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        errorPolicy: 'all'
      }
    }
  };
}

@NgModule({
  declarations: [],
  exports: [ApolloModule, HttpLinkModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule { }