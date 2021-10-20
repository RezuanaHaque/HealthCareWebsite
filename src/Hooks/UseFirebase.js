import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, onAuthStateChanged, sendEmailVerification, updateProfile, GoogleAuthProvider, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import initializeAuth from '../Firebase/Firebase.init';
initializeAuth()
const UseFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)
    const auth = getAuth();

    const googleSignin = () => {
        setLoading(true)
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user)
                setError('')
                // signinLink(email)
            })

            .catch((error) => {
                setError(error.message);
            })
            .finally(() =>
                setLoading(false));
    }
    const verifyMail = () => {
        sendEmailVerification(auth.currentUser)
            .then((result) => {

            });

    }
    const emailSignin = (email, password, name) => {

        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setProfile(name)
                setUser(result.user)
                window.location.reload();
                verifyMail()
                setError('')

            })
            .catch((error) => {
                setError(error.message);
            });
    }
    const emailLogin = (email, password) => {
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user)
                setError('')

            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setLoading(false));


    }
    const setProfile = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {

        }).catch((error) => {
            setError(error.message);
        });
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            setLoading(false)
        });


    })
    const logOut = () => {
        setLoading(true)
        signOut(auth).then(() => {
            setUser({})
            setError('')
        })
            .finally(() => setLoading(false))
            .catch((error) => {
                setError(error.message);
            });

    }
    return {
        logOut,
        googleSignin,
        user,
        error,
        emailSignin,
        emailLogin,
        setProfile,
        loading,
        setError
        // signinLink

    }
};

export default UseFirebase;