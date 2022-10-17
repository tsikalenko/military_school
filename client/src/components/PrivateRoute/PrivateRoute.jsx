import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { admin } from '../../api/userAPI';

const PrivateRoute = ({ children }) => {
    const [isAdmin, setIsAdmin] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('token'));
        token
            ? (async () => {
                  try {
                      setIsAdmin(await admin(token));
                  } catch (err) {
                      console.log(err);
                  }
              })()
            : setIsAdmin(false);
    }, []);

    return isAdmin === null ? (
        <h2 className='loading'>Loading...</h2>
    ) : isAdmin ? (
        children
    ) : (
        <Navigate to='/login' state={{ from: location }} />
    );
};
PrivateRoute.propTypes = {
    children: PropTypes.object,
};

export default PrivateRoute;
