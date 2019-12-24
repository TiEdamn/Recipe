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
        }
    }
};
