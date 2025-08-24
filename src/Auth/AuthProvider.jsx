import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import auth from '../firebase/firebase.init';
// import axios from 'axios';

const googleProvider = new GoogleAuthProvider;

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
        const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);

    }
      const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };
    const signOutUser = () => {
        localStorage.removeItem('token')
        setLoading(true);
        return signOut(auth)
    }
      useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
                //console.log(currentUser)
            setUser(currentUser);
            setLoading(false)
        })
        return () => {
            unSubscribe();
        }

    }, [])

//   useEffect(() => {
//         const unSubscribe = onAuthStateChanged(auth, currentUser => {
//         setUser(currentUser);
//              if (currentUser?.email) {
//                  axios.post(`https://edusphere-server-project.vercel.app/jwt`, {
//                     email: currentUser?.email,
//                 }).then(res => {
//                     //console.log(res.data)
//                      const token = res.data.token;
//                      localStorage.setItem('token', token);
//             //         console.log('Token stored:', token);
//                 })
//              }
//             else{
//                 localStorage.removeItem('token')
//             }
//             setLoading(false)

//         })
//         return () => {
//             unSubscribe();
//         }

//     }, [])
    const authInfo={
         createUser,
         loading,
         signInUser ,
         user,
         setUser,
          signOutUser,
          googleLogin

    }
    return (
       <AuthContext value={authInfo}>
            {children}
       </AuthContext>
    );
};

export default AuthProvider;