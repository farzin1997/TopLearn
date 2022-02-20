import http from './';

export const fetchCourses = async () => {
  try {
    const {
      data: {courses},
    } = await http.get(`${http.url}/courses`);
    console.log('courses:', courses);
    return courses;
  } catch (err) {
    console.log(err);
  }
};
