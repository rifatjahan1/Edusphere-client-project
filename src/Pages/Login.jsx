import React, { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import AuthContext from '../Auth/AuthContext';

const Login = () => {
     const { signInUser,googleLogin } = use(AuthContext);
    const location=useLocation();
    //console.log(location)
    const navigate= useNavigate();
   const from=location.state ||'/';

       const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        //console.log(email, password)
        signInUser(email, password)
            .then((result) => {
                const user = result.user;
                //console.log(user)
             navigate(from)

            })
            .catch((error) => {
                alert(error.code + ': ' + error.message);
            });
    }
    
    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                //console.log(result)
                //navigate(from)
            })
            .catch(error => {
                //console.log(error.message)
            })

    };
    return (
               <div className='flex items-center justify-center mt-12'>
            <div className='"bg-gradient-to-r from-blue-100 to-indigo-200 min-h-screen flex items-center justify-center"'>
                <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
                    <h2 className="text-3xl font-bold text-center text-blue-500 mb-6">Login to EduSphere</h2>

                    <form onSubmit={handleLogin} className="space-y-5">
                        <div>
                            <label className="block text-gray-700 font-semibold mb-1 text-left">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 font-semibold mb-1 text-left">Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="********"
                                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full text-xl bg-blue-500 text-white py-2.5 rounded hover:bg-cyan-500 transition font-semibold"
                        >
                            Login
                        </button>
                    </form>

                    <div className="text-right text-sm  text-blue-600  py-2 rounded ">
                        <button
                            type="button"
                            className='hover:text-cyan-500 hover:underline'
        
                         onClick={() => navigate('/forgotPassword')}
                        >
                            Forgot Password?
                        </button>
                    </div>

                    <p className="mt-4 text-sm text-center text-gray-600">
                        Don't have an account?
                        <Link className="underline text-blue-500" to="/register">Register</Link>
                    </p>

                    <div className="mt-4 text-center">
                        <p className="text-sm text-gray-500 mb-2">Or login with</p>
                        <button onClick={handleGoogleLogin} className="bg-gray-200 text-gray-800 border border-gray-300 px-4 py-3 rounded w-full flex items-center justify-center gap-2 shadow-sm hover:bg-white hover:underline">
                            <img src="https://i.ibb.co/zhM175cJ/rsz-gmail-1.png" alt="Google Icon" className="w-5 h-5" />
                            <p>Sign in with Google</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;