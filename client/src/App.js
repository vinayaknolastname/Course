import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Header from './Components/Layout/Header';
import Courses from './Components/Courses/Courses';
import Footer from './Components/Layout/Footer/Footer';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import Subscribe from './Components/Payments/Subscribe';
import NotFound from './Components/NotFound/NotFound';
import PaymentSuccess from './Components/Payments/PaymentSucess';
import PaymentFail from './Components/Payments/PaymentFail';
import CoursePage from './Components/CoursesPage/CoursePage';
import Profile from './Components/Profile/Profile';
import Dashboard from './Components/Admin/Dashboard/Dashboard';
import CreateCourse from './Components/Admin/CreateCourse/CreateCourse';
import CoursesADM from './Components/Admin/CoursesADM/CoursesADM';
import Users from './Components/Admin/Users/Users';
import { useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { loadUser } from './redux/actions/user';
import Loader from './Components/Layout/Loader.jsx/loader';
import { ProtectedRoute } from 'protected-route-react';

function App() {
  // window.addEventListener("contextmenu", (e)=> {
  //   e.preventDefault();
  // });

  const { isAuthenticated, user, message, error, loading} = useSelector(
    state => state.user,
    
  );

   

  const dispatch = useDispatch();
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
  }, [dispatch, error, message]);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <Router>
    
  {

    ( <>    <Header isAuthenticated={isAuthenticated} user={user} />
 

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/course/:id" element={<CoursePage />} />
        <Route
          path="/login"
          element={
            <ProtectedRoute
              isAuthenticated={!isAuthenticated}
              redirect="/profile"
            >
              <Login />
            </ProtectedRoute>
          }
        />

        <Route
          path="/register"
          element={
            <ProtectedRoute
              isAuthenticated={!isAuthenticated}
              redirect="/login"
            >
              <Register />{' '}
            </ProtectedRoute>
          }
        />

        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />
        <Route path="/paymentfail" element={<PaymentFail />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              {' '}
              <Profile    user={user} />{' '}
            </ProtectedRoute>
          }
        />

        {/* Admin Routes */}

        <Route path="/admin/dashboard" element={<ProtectedRoute  isAuthenticated={isAuthenticated } adminRoute={true} isAdmin={ user && user.role === 'admin' } ><Dashboard /></ProtectedRoute>} />
        <Route path="/admin/createcourse" element={<CreateCourse />} />
        <Route path="/admin/coursesadm" element={<CoursesADM />} />
        <Route path="/admin/users" element={<Users />} />
      </Routes>
      <Footer /></> )
  }
    </Router>
  );
}

export default App;
