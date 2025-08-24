import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import AuthContext from '../Auth/AuthContext';
import { updateProfile } from 'firebase/auth';

//import { updateProfile } from 'firebase/auth';


const Register = () => {
    const { createUser , setUser} = useContext(AuthContext);
     const [passwordError, setPasswordError] = useState('');
    const navigate = useNavigate();
    const validatePassword = (password) => {
        const lengthValid = password.length >= 6;
        const hasUpper = /[A-Z]/.test(password);
        const hasLower = /[a-z]/.test(password);
        return {
            valid: lengthValid && hasUpper && hasLower,
            errors: {
                length: !lengthValid,
                upper: !hasUpper,
                lower: !hasLower
            }
        };
    };

    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photo = e.target.photo.value;
        console.log(name,email,password,photo)



        const { valid, errors } = validatePassword(password);
        if (!valid) {
            let msg = 'Password must: ';
            if (errors.upper) msg += 'include an uppercase letter, ';
            if (errors.lower) msg += 'include a lowercase letter, ';
            if (errors.length) msg += 'be at least 6 characters long, ';
            setPasswordError(msg.replace(/,\s*$/, ''));
            return;
        }

        setPasswordError('');

        
        createUser(email, password)
            .then((result) => {
                const user = result.user;

                return updateProfile(user, {
                    displayName: name,
                    photoURL: photo,
                }).then(() => {
                    setUser({ ...user, displayName: name, photoURL: photo });
                    navigate('/login');
                });
            })
            .catch((error) => {
                alert(error.message);
                console.error(error);
            });
    };

    return (
        <div className="mt-8 flex items-center justify-center">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
                <h2 className="text-3xl font-bold text-center text-cyan-500 mb-6">Create an Account</h2>

                <form onSubmit={handleRegister} className="space-y-5">
                    {/* Full Name */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-1 text-left">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-1 text-left">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-1 text-left">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="********"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        />
                    </div>
                    {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}

                    {/* Photo URL */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-1 text-left">Photo URL</label>
                        <input
                            type="text"
                            name="photo"
                            placeholder="Photo URL"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-cyan-500 text-white py-2 rounded-xl hover:bg-blue-500 transition font-semibold"
                    >
                        Register
                    </button>
                </form>

                <p className="mt-6 text-sm text-center text-gray-600">
                    Already have an account?{' '}
                    <Link className="underline text-blue-500" to="/login">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
