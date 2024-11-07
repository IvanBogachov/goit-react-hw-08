import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router';
import { selectIsRefreshing } from './redux/auth/selectors.js';
import Loader from './components/Loader/Loader';
import Layout from './components/Layout/Layout';
import RestrictedRoute from './routes/RestrictedRoute.jsx';
import PrivateRoute from './routes/PrivateRoute';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const RegisterPage = lazy(() =>
  import('./pages/RegisterPage/RegisterPage.jsx')
);
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

import { refreshUser } from './redux/auth/operations';

import './App.css';

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      {isRefreshing ? (
        <Loader />
      ) : (
        <Layout>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route
              path='/register'
              element={
                <RestrictedRoute
                  redirectTo='/contacts'
                  component={<RegisterPage />}
                />
              }
            />
            <Route
              path='/login'
              element={
                <RestrictedRoute
                  redirectTo='/contacts'
                  component={<LoginPage />}
                />
              }
            />
            <Route
              path='/contacts'
              element={
                <PrivateRoute
                  redirectTo='/login'
                  component={<ContactsPage />}
                />
              }
            />
            <Route
              path='*'
              element={
                <RestrictedRoute redirectTo='*' component={<NotFoundPage />} />
              }
            />
          </Routes>
        </Layout>
      )}
      <Toaster position='top-right' reverseOrder={false} />
    </>
  );
}

export default App;
