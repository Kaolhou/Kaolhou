import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: process.env.ENDPOINT_API,
    headers:{
        'Authorization':`Bearer ${process.env.USER_TOKEN}`
    },
    cache: new InMemoryCache()
})
export default client