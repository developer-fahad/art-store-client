import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    
    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }
    
    if(user){
        return children;
    }
    if(!user){
        return <Navigate to="/"></Navigate>
    }
    
};

export default PrivateRoutes;