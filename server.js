const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config({ path: '.env' });

const Recipe = require('./models/Recipe');
const User = require('./models/User');

// Bring in graphql-express middleware
const { graphiqlExpress, graphqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');

const { typeDefs } = require('./schema');
const { resolvers } = require('./resolvers');

// Create schema
const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

// Initialize server
const app = express();

// Create graphiQL application
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

// Connect schemas to graphQL
app.use(
    '/graphql',
    bodyParser.json(),
    graphqlExpress({
        schema,
        context: {
            Recipe,
            User
        }
    })
);

// Connect to database
mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
    .then(() => console.log('DB connected'))
    .catch(err => {
        console.error(err);
    });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}!`);
});
