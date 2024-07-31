import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuthLoggedIn } from '../redux/auth/authSelectors';

export default function PrivateRoute({
  component: Component,
  redirectTo = '/',
}) {
  const isLoggedIn = useSelector(selectAuthLoggedIn);

  return isLoggedIn ? Component : <Navigate to={redirectTo} />;
}
