import React, { useEffect } from "react";
import { Routes,Route,Navigate } from 'react-router-dom';
import { getToken } from './common';
import Login from '../pages/login';
 
// handle the private routes
// function PrivateRoute({ component: Component, ...rest }) {
//   return (
//     <Routes>
//     <Route
//       {...rest}
//       render={(props) => getToken() ? <Component {...props} /> : <Navigate to={{ pathname: '/', state: { from: props.location } }} />}
//     />
//     </Routes>
//   )
// }

function PrivateRoute({ component: Component, ...rest }) {
  
  const isLogged = true;

  useEffect(() => {
    const token = getToken();
    if (!token) {
      isLogged = false;
    }
  }, []); 

  return (
    isLogged ? <Component/> :<Navigate to={{ pathname: '/' }} />
  );
}
 
export default PrivateRoute;