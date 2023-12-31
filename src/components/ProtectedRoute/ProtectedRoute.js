import { Navigate } from 'react-router-dom';

function ProtectedRouteElement({ element: Component, ...props  }) {
  return (
    props.loggedIn ? <Component {...props} /> : <Navigate to='/' replace/>
)}

export default ProtectedRouteElement; 