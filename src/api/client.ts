import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

const httpLink = createHttpLink({
  uri: import.meta.env.VITE_BASE_URL
})
const authLink = setContext((_, { headers }) => {
  const token: string = import.meta.env.VITE_TOKEN
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${token}`
    }
  }
})

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})
