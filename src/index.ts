import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const books = [
  {
    id: "1",
    title: "The Awakening",
    author: "Kate Chopin",
    supporter: [
      {
        name: "Joseph",
        age: 28,
      },
      {
        name: "Emma",
        age: 30,
      },
    ],
  },
  {
    id: "2",
    title: "City of Glass",
    author: "Paul Auster",
    supporter: [
      {
        name: "Chris",
        age: 25,
      },
      {
        name: "J",
        age: 20,
      },
    ],
  },
];

const typeDefs = `#graphql
  type Contributors {
    name: String
    age: Int
  }

  type Book {
    id: ID
    title: String
    author: String
    supporter: [Contributors]
  }

  type Query {
    books(id: ID): [Book]
  }
`;

const resolvers = {
  Query: {
    books: (_, { id }) => {
      if (id) {
        return books.filter((book) => book.id === id);
      }
      return books;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
