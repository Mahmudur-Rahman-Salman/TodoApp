import { useEffect, useState } from "react";
import initializeFirebase from "../components/Login/Firebase/firebase.init";
import { getAuth, signOut, onAuthStateChanged, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


initializeFirebase();


const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const auth = getAuth();
    const provider = new GoogleAuthProvider();



    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message)
            })
    }



    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }

        });
        return () => unsubscribed;
    }, [])

    // signout
    const logout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
    }

    return {
        user,
        logout,
        error,
        signInWithGoogle
    }


}

export default useFirebase;