import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/auth/selectors.js';

const RestrictedRoute = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? <Navigate to="/contacts" /> : <Outlet />;
};
export default RestrictedRoute;
