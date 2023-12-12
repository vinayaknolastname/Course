import {configureStore} from '@reduxjs/toolkit' 
import { courseReducer } from './reducers/courseReducer';
import { userReducer } from './reducers/userReducer';



const store = configureStore({


    reducer: {

user: userReducer,
course: courseReducer,


    },
})


export default store;

export const server = 'http://localhost:4000/api/v1';

