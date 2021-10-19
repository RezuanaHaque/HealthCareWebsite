import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, onAuthStateChanged, GoogleAuthProvider, signOut, createUserWithEmailAndPassword } from "firebase/auth";
import initializeAuth from '../Firebase/Firebase.init';
initializeAuth()
const UseFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState({})
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const googleSignin = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user)
            })
            .catch((error) => {
                setError(error.message);
            });
    }
    const emailSignin = (email,password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user)
            })
            .catch((error) => {
                setError(error.message)
            });
        // console.log("from hook",email,password)
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        });
    })
    const logOut = () => {
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            setError(error.message)
        });

    }
    return {
        logOut,
        googleSignin,
        user,
        error,
        emailSignin

    }
};

export default UseFirebase;