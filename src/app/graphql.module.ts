import { NgModule } from '@angular/core';
import { ApolloModule, Apollo, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
const uri = 'https://oa-shopping-list.herokuapp.com/v1/graphql';//'http://localhost:8080/v1/graphql'; // <-- add the URL of the GraphQL server here
//const uri = 'http://localhost:8080/v1/graphql'; // <-- add the URL of the GraphQL server here
export function createApollo(httpLink: HttpLink) {


  const link = httpLink.create({
    uri: uri,
    withCredentials: true
  });

  return {
    link: link,//httpLink.create({uri}),
    cache: new InMemoryCache(),
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