import React, { useContext, useEffect, useState } from 'react';
import { auth } from '../firebase';
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


const AuthContext = React.createContext();

export const useAuth = () => {
    return useContext(AuthContext)
}


export const AuthProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const login = async (email, password) => {
        try {
            setError("");
            setLoading(true);
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/');
        } catch {
            setError("Failed to log in");
        }
        setLoading(false);
    }

    const signup = async (email, password) => {
        await createUserWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setCurrentUser(user);
            setLoading(false);
        })

        return unsubscribe
    }, []);

    const value = {
        currentUser,
        signup,
        login,
    };

  return (
    <AuthContext.Provider value={value}>
        {!loading && !error && children}
    </AuthContext.Provider>
  )
}

