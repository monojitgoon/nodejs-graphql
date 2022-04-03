const resolvers = {
  Query: {
    characters: (parent, args, { dataSources }, info) => {
      return dataSources.character.getCharacters(args);
    },
  },
};
module.exports = resolvers;
