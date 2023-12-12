import { server } from '../store';
import axios from 'axios';

export const getAllCourses =
  (category = '', keyword = '') =>
  async dispatch => {
    try {
      dispatch({ type: 'allCoursesRequest' });

      const { data } = await axios.get(`${server}/courses`);

      dispatch({ type: 'allCoursesSuccess', payload: data.courses });
    } catch (error) {
      dispatch({
        type: 'allCoursesFail',
        payload: error.response.data.message,
      });
    }
  };

export const createCourse =
  myform => async dispatch => {
    try {
      for (var key of myform.entries()) {
             console.log(key[0] + ', ' + key[1]);
         }
      dispatch({ type: ' createCoursesRequest' });

      const { data } = await axios.post(
        `${server}/createcourse`,

        myform ,
        {
          headers: {
            'Content-type': 'application/json',
          },

          withCredentials: true,
        }
      );

      dispatch({ type: 'createCoursesSuccess', payload: data });
    } catch (error) {
      dispatch({
        type: 'createCoursesFail',
        payload: error.response.data.message,
      });
    }
  };
