import { Route, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const ProtectedRoute = ({ element: Element, ...rest }) => {
  const navigate = useNavigate();
  const token = Cookies.get('token');

  if (token === undefined) {
    navigate('/login');
    return null; // or you can return a login component or message to inform the user.
  }

  return <Route {...rest} element={<Element />} />;
};

export default ProtectedRoute;
