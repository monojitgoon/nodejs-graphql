const { ApolloServer } = require('apollo-server');
const Character = require('./graphql/sources');
const resolvers = require('./graphql/resolvers');
const typeDefs = require('./graphql/typeDefs');


const graphqlServer = new ApolloServer({ typeDefs, resolvers, dataSources: () => ({
    character: new Character()
  }) });

  graphqlServer.listen({ port: process.env.port || 8000 })
    .then(({ url }) => { console.log(`GraphQL server started on ${url}`); })
    .catch(() => {
        console.log('Unable to start the server');
    });