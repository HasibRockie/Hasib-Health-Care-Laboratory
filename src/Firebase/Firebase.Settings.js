import { useEffect, useState } from "react";
import FirebaseInitialize from "./Firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useHistory } from "react-router";

FirebaseInitialize();

const FirebaseSettings = () => {
    const history = useHistory()
  const [user, setUser] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true) 

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  useEffect(() => {
      setLoading(true)
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true);
        setUser(user);
        setName(user?.displayName);
        setEmail(user?.email);
        setError('')
      }
      setLoading(false)
    });


    console.log(name, email, password);
  }, []);


//   get name from user 
const GetName = (e) => {
    setName(e.target.value)
}

//   get email from user 
const GetEmail = (e) => {
    setEmail(e.target.value)
}

//   get password from user 
const GetPassword = (e) => {
    setPassword(e.target.value)
}


  // sign up
  const SignUp = (name) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  };

  //   sign in
  const SignIn = () => {
      setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  };

  //   google sign in
  const GoogleSignIn = () => {
      setLoading(true)
      return signInWithPopup(auth, googleProvider)

  };

  //   github sign in
  const GithubSignIn = () => {
      setLoading(true)
    return signInWithPopup(auth, githubProvider)
 
  };

  // sign out
  const SignOut = () => {
    setLoading(true)
    signOut(auth)
      .then(() => {
        setUser({});
        setName("");
        setEmail("");
        setLoggedIn(false);
        history.push('/')
        setError('')
      })
      .catch((error) => {
        setError(error?.message);
      })
      .finally(setLoading(false))
  };

  return {
    name,
    user,
    email,
    password,
    loggedIn,
    error,
    SignUp,
    SignIn,
    SignOut,
    GoogleSignIn,
    GithubSignIn,
    GetName,
    GetEmail,
    GetPassword,
    loading,
    setLoading,
    setEmail,
    setName,
    setPassword,
    setError,
    setLoggedIn
  };
};

export default FirebaseSettings;
