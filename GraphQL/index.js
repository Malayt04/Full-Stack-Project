import {ApolloServer} from '@apollo/server' // Setup server and configure it and tell applollo how to handle data
import {startStandaloneServer} from '@apollo/server/standalone' // Start the server 
import { typeDefs } from './schema.js'
import db from './db.js'
//server setup

const resolvers={
    Query: {
        games(){
            return db.games;
        },
        reviews(){
            return db.reviews;
        },
        authors(){
            return db.authors;
        },
        review(_,args ){
            return db.reviews.find((review)=>review.id = args.id);
        },
        game(_,args ){
            return db.games.find((game)=>game.id = args.id);
        },
        author(_,args ){
            return db.authors.find((author)=>author.id = args.id);
        }
    },
    Game:{
        reviews(parent){
            return db.reviews.filter((review)=>review.game_id === parent.id);
        }
    },

    Author:{
        reviews(parent){
            return db.reviews.filter((review)=>review.author_id===parent.id);
        }
    },
    Review:{
        author(parent){
            return db.authors.find((a)=>a.id === parent.author_id);
        },
        game(parent){
            return db.games.find((g)=>g.id === parent.game_id);
        }
    },

    Mutation:{
        deleteGame(_, args){
            db.games = db.games.filter((g)=>g.id !=args.id);
        }
    }
}

const server = new ApolloServer({
typeDefs: typeDefs,
resolvers: resolvers
})

const {url} = await startStandaloneServer(server,{
    listen:{port:4000}
})

console.log("Server ready");