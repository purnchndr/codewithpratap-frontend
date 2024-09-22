import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Homepage from './pages/homepage/Homepage';
import RefundConditions from './pages/refundConditions/RefundConditions';
import PrivacyPolicy from './pages/privacyPolicy/PrivacyPolicy';
import TermsOfUse from './pages/termsOfUse/TermsOfUse';
import Copyright from './pages/copyright/Copyright';
import Error from './pages/error/Error';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import User from './pages/user/User';
import Dashboard from './pages/dashboard/Dashboard';
import Courses from './pages/courses/Courses';
import Tutorials from './pages/tutorials/Tutorials';
import Blogs from './pages/blogs/Blogs';
import Contact from './pages/contact/Contact';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import CourseDetails from './pages/courseDetails/CourseDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
    errorElement: <Error />,
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: '/signup',
    element: <Register />,
    errorElement: <Error />,
  },
  {
    path: '/user',
    element: <User />,
    errorElement: <Error />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    errorElement: <Error />,
  },
  {
    path: '/tutorials',
    element: <Tutorials />,
    errorElement: <Error />,
  },
  {
    path: '/courses',
    element: <Courses />,
    errorElement: <Error />,
  },
  {
    path: '/courses/:id',
    element: <CourseDetails />,
    errorElement: <Error />,
  },
  {
    path: '/blogs',
    element: <Blogs />,
    errorElement: <Error />,
  },
  {
    path: '/contact',
    element: <Contact />,
    errorElement: <Error />,
  },
  {
    path: '/refund-and-cancellation-policy',
    element: <RefundConditions />,
    errorElement: <Error />,
  },
  {
    path: '/privacy-policy',
    element: <PrivacyPolicy />,
    errorElement: <Error />,
  },
  {
    path: '/terms-of-use',
    element: <TermsOfUse />,
    errorElement: <Error />,
  },
  {
    path: '/copyright',
    element: <Copyright />,
    errorElement: <Error />,
  },
]);

function App() {
  console.log(window.BACKEND_URL);
  return <RouterProvider router={router} />;
}

export default App;
