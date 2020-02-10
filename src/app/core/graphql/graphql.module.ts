import { NgModule } from '@angular/core';
import { ApolloModule, Apollo, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink, concat } from 'apollo-link';
import { setContext } from 'apollo-link-context';
import { errorLink } from './middleware/error'
import { from } from 'zen-observable';
import { AuthService } from '../services/auth/auth.service';
import { mergeMap, tap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { IsLoadingService } from '@service-work/is-loading';


const uri = 'https://oa-shopping-list.herokuapp.com/v1/graphql';//'http://localhost:8080/v1/graphql'; // <-- add the URL of the GraphQL server here
//const uri = 'http://localhost:8080/v1/graphql'; // <-- add the URL of the GraphQL server here
export function createApollo(httpLink: HttpLink, auth: AuthService, isLoadingService: IsLoadingService) {


  const http = httpLink.create({
    uri: uri,
    withCredentials: true
  });


  const authMiddleware = setContext((operation, { headers }) =>
    auth.getTokenSilentlyAsPromise$().then(data => ({
      headers: {
        ...headers,
        Authorization: `Bearer ${data || null}`
      }

    }))
  );

  const isLoading = new ApolloLink((operation, forward) => {
    isLoadingService.add();
    return forward(operation);
  });
  const isLoadingAfter = new ApolloLink((operation, forward) => {
    return forward(operation).map(response => {
      if (response) {
        isLoadingService.remove();

      }
      return response;
    });
  });

  //const link = ApolloLink.from([errorLink, http]) 

  return {
    link: ApolloLink.from([authMiddleware, errorLink, isLoading, isLoadingAfter, http]),  // concat(errorLink,http),//httpLink.create({uri}),
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
      deps: [HttpLink, AuthService, IsLoadingService],
    },
  ],
})
export class GraphQLModule { }