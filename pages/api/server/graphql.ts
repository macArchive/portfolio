import { ApolloServer } from 'apollo-server'
import { resolvers, schema } from './schema'
import CourseAPI from './sources'

const server = new ApolloServer({
  schema,
  resolvers,
  dataSources: () => {
    return { courseAPI: new CourseAPI() }
  }
})

server.listen()
