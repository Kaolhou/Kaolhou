import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: import.meta.env.VITE_URL,
    headers:{
        'Authorization':`Bearer ${import.meta.env.VITE_ADMIN_TOKEN}`
    },
    cache: new InMemoryCache()
})
export default client