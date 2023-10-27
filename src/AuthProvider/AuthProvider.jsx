import {
    FacebookAuthProvider,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { app } from "./Firebase.config";
export const AuthContext = createContext(null);
const AuthoProvider = ({ children }) => {
  const fbprovider = new FacebookAuthProvider();
  const googleprovider = new GoogleAuthProvider();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth(app);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInWithFacebook = () => {
    return signInWithPopup(auth, fbprovider);
  };

  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleprovider);
  };
  const userSignin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const userSignOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubcribe();
  }, [auth]);

  const AuthInfo = {
    user,
    loading,
    createUser,
    signInWithFacebook,
    signInWithGoogle,
    userSignin,
    userSignOut,
  };
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthoProvider;
AuthoProvider.propTypes = {
  children: PropTypes.node,
};
