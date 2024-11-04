import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import { refreshUser } from '/src/redux/auth/operations';
import { selectIsRefreshing } from '/src/redux/auth/selectors.js';
import PrivateRoute from './components/PrivateRoute';
import RestrictedRoute from './components/RestrictedRoute';
import HomePage from '../src/pages/HomePage/HomePage';
import RegistrationPage from '../src/pages/RegistrationPage/RegistrationPage';
import LoginPage from '../src/pages/LoginPage/LoginPage';
import ContactsPage from '../src/pages/ContactsPage/ContactsPage';

import './App.css';

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path='/register'
          element={
            <RestrictedRoute
              redirectTo='/contacts'
              component={<RegistrationPage />}
            />
          }
        />
        <Route
          path='/login'
          element={
            <RestrictedRoute redirectTo='/contacts' component={<LoginPage />} />
          }
        />
        <Route
          path='/contacts'
          element={
            <PrivateRoute redirectTo='/login' component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
