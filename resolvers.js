const jwt = require('jsonwebtoken');

const createToken = (user, secret, expiresIn) => {
    const { username, email } = user;
    return jwt.sign({ username, email }, secret, { expiresIn });
};

exports.resolvers = {
    Query: {
        getAllRecipes: async (root, args, { Recipe }) => {
            return await Recipe.find();
        }
    },
    Mutation: {
        addRecipe: async (
            root,
            { name, description, category, instructions, username },
            { Recipe }
        ) => {
            return await Recipe.create({
                name,
                description,
                category,
                instructions,
                username
            });
        },

        signupUser: async (root, { username, email, password }, { User }) => {
            const user = await User.findOne({ username });

            if (user) {
                throw new Error('User already exists');
            }
            const newUser = await User.create({
                username,
                email,
                password
            });

            return {
                token: createToken(newUser, process.env.JWT_SECRET, '1hr')
            };
        }
    }
};
