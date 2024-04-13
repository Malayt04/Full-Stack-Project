export const typeDefs = `#graphql
type Game{
    id: ID!,
    title: String!,
    platform: [String!]!
    reviews:[Review!]
},
type Review{
    id:ID!,
    rating: Int!,
    content: String!
    game:Game!
    author:Author!
}
type Author{
    id:ID!,
    name:String!,
    verified:Boolean!
    reviews:[Review!]
},
type Query{
    reviews: [Review]
    review(id:ID!): Review
    games: [Game]
    game(id:ID!): Game
    authors: [Author]
    author(id:ID!):Author
}

type Mutation{
    deleteGame(id:ID!):[Game]
}
`

//int,float,strings,boolean,ID
//!=>required field

// int string array, we neeed two ! one for the array and other for the individual values of teh array as it can be null  also

//The type query is necessery in all graph ql schemas as it determines entery points to the graph and specify the return type of those entry points gatekeeping entery to the graph