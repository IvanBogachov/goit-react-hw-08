import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../redux/auth/selectors.js';

const RestrictedRoute = ({
  component: Component,
  redirectTo = '/contacts',
}) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};

export default RestrictedRoute;
