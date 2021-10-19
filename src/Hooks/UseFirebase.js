import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, onAuthStateChanged, updateProfile, GoogleAuthProvider, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import initializeAuth from '../Firebase/Firebase.init';
initializeAuth()
const UseFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState({})
    const [loading, setLoading] = useState(true)
    const auth = getAuth();

    const googleSignin = () => {
        setLoading(true)
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user)
                // console.log(result.user);
            })
            
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setLoading(false));
    }
    const emailSignin = (email, password, name) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setProfile(name)
                setUser(result.user)
                setError('')

            })
            .catch((error) => {
                setError(error.message)
            });
        // console.log("from hook",email,password)
    }
    const emailLogin = (email, password) => {
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user)
                setError('')
                // console.log(result.user);
            }).finally(() => setLoading(false))
            .catch((error) => {
                setError(error.message)
            });
            
        // console.log("from hook",email,password)
    }
    const setProfile = (name) => {
        // console.log("hook",name);
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {

        }).catch((error) => {
            setError(error.message)
        });
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            setLoading(false)
        });
        

    },[])
    const logOut = () => {
        setLoading(true)
        signOut(auth).then(() => {
            setUser({})
        })
            .finally(() => setLoading(false))
            .catch((error) => {
                setError(error.message)
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
        loading

    }
};

export default UseFirebase;