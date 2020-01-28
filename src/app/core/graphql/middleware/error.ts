
import { onError } from 'apollo-link-error';
import { GraphQLError } from 'graphql';

export const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)

        //throw all graphq QL errors to be managed by the global angular error handler
        graphQLErrors.forEach(err => {
            throw new GraphQLError(
                `${err.message}, Location: ${err.locations}, Path: ${err.path}`,
                err.nodes,
                err.source,
                err.positions,
                err.path,
                err.originalError,
                err.extensions

            );

            //throw new GraphQLError(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`);

        });
    if (networkError) console.log(`poo[Network error]: ${networkError}`);
});