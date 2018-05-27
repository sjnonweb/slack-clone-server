import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';

import typeDefs from './schema';
import resolvers from './resolvers';

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const PORT = 8080;

const app = express();

const graphqlEndpoint = '/graphql';

// bodyParser is needed just for POST.
app.use(graphqlEndpoint, bodyParser.json(), graphqlExpress({ schema }));

app.use('/graphiql', graphiqlExpress({endpointURL: graphqlEndpoint}))

app.listen(PORT);
