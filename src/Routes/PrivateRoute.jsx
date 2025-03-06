import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useNavigate } from 'react-router-dom';
import Login from '../pages/Login/Login';

const PrivateRoute = ({children}) => {
    const navigate = useNavigate();

    const {user} = useContext(AuthContext);
    if(user){
        return children;
    }
    else{
        navigate("/login")
        return <Login></Login>
    }
};

export default PrivateRoute;