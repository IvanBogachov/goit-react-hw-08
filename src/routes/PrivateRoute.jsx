import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/auth/selectors.js';

const PrivateRoute = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};
export default PrivateRoute;
