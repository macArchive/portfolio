import { RESTDataSource } from 'apollo-datasource-rest'

export class CourseAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL =
      'https://firestore.googleapis.com/v1/projects/YOUR_PROJECT_ID/databases/(default)/documents/'
  }

  getAllCourses() {
    return this.get('courses')
  }

  getCourse(courseId) {
    return this.get(`courses/${courseId}`)
  }

  getAllModules() {
    return this.get('modules')
  }

  getCourseModules(courseId) {
    return this.get(`courses/${courseId}/modules`)
  }

  getAuthor(authorId) {
    return this.get(`author/${authorId}`)
  }
}
