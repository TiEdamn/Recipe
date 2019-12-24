exports.typeDefs = `
type Recipe {
    name: String!
    category: String!
    description: String!
    instructions: String!
    createAt: String
    likes: Int
    username: String
}
type User {
    username: String! @unique
    password: String!
    email: String!
    joiDate: String
    favorites: [Recipe]
}
`;
