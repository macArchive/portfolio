import { gql } from 'apollo-server'

// Defines the GraphQL Schema
export const schema = gql`
  type Query {
    "Main list of courses"
    courses: [Course!]!
    "Specific course by id"
    course: Course!
  }

  "The creator of a course"
  type Author {
    "Unigue identifier"
    id: ID!
    "Author's first and last name"
    name: String!
    "Author's profile photo url"
    photo: String
  }

  "A course is a group of modules that teaches something"
  type Course {
    "Unique identifier"
    id: ID!
    "The course title"
    title: String!
    "Author of the course"
    author: Author!
    "Photo url for the course cover image"
    image: String
    "The courses aproximate length to complete in minutes"
    length: Int
    "An array of course modules"
    modules: [Module!]!
    "The number of modules this course contains"
    moduleCount: Int
    "A description of this course"
    description: String
    "The total number of views on the course"
    views: Int
    "An array of categories"
    tags: [Tag!]!
  }

  "A Module is a single unit of teaching, multiple modules compose a course"
  type Module {
    "Unique identifier"
    id: ID!
    "The module title"
    title: String
    "The modules length in minutes"
    length: Int
    "An array of categories"
    tags: [Tag!]!
  }

  type Tag {
    "Unique identifier"
    id: ID!
    "The tag title"
    title: String
    "Description of the tag"
    description: String
  }
`

// Defines resolvers for running queries
export const resolvers = {
  Query: {
    // returns array of all Courses
    allCourses: (_, __, { dataSources }) => {
      return dataSources.courseAPI.getAllCourses()
    },
    // returns a single course by ID
    course: (_, { id }, { dataSources }) => {
      return dataSources.courseAPI.getCourse(id)
    },
    // returns a list of all Modules
    allModules: (_, __, { dataSources }) => {
      return dataSources.courseAPI.getAllModules()
    }
  },
  Course: {
    // returns author data for a specific course
    author: ({ authorId }, _, { dataSources }) => {
      return dataSources.courseAPI.getAuthor(authorId)
    },
    modules: ({ id }, _, { dataSources }) => {
      return dataSources.courseAPI.getCourseModules(id)
    }
  }
}
