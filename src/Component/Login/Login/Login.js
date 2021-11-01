import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri=location.state?.from || '/';
    console.log(location.state?.from);
    const handleGoogleLogin = () =>{
        signInUsingGoogle()
        .then(result =>{
            history.push(redirect_uri);
        })
    }
    return (
        <div className="text-center pt-5 mt-4">
            <h2 className="pb-3">Please Login</h2>
            <button onClick={handleGoogleLogin} className="btn btn-success p-2">Google Sign In</button>
        </div>
    );
};

export default Login;
