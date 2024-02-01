import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuthLoggedIn } from '../redux/auth/authSelectors';

export default function PrivateRoute({
  component: Component,
  redirectTo = '/',
}) {
  const isLoggedIn = useSelector(selectAuthLoggedIn);
  console.log(isLoggedIn);

  return isLoggedIn ? Component : <Navigate to={redirectTo} />;
}
