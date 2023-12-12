import { createReducer } from '@reduxjs/toolkit';

export const courseReducer = createReducer(
  { courses: [] },
  {
    allCoursesRequest: state => {
      state.loading = true;
    },
    allCoursesSuccess: (state, action) => {
      state.loading = false;
      state.courses = action.payload;
    },
    allCoursesFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    
      createCoursesRequest: state => {
        state.loading = true;
      },
      createCoursesSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
      },
      createCoursesFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
    clearError: state => {

        state.error = null
    },

    clearMessage: state => {

        state.message =null
    }
   }
);
