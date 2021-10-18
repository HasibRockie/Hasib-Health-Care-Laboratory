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

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true);
        setUser(user);
        setName(user?.displayName);
        setEmail(user?.email);
        setError('')
      }
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
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        setName(name);
        setLoggedIn(true);
        setEmail(email);
        history.push('/')
        setError('')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
        console.log(errorMessage); 
      });
  };

  //   sign in
  const SignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        setEmail(userCredential.user?.email);
        setName(userCredential.user?.displayName);
        setLoggedIn(true);
        history.push('/')
        setError('')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  //   google sign in
  const GoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        setUser(result.user);
        setEmail(result.user?.email);
        setName(result.user?.displayName);
        setLoggedIn(true);
        history.push('/')
        setError('')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);

        setError(error?.message);
      });
  };

  //   github sign in
  const GithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        setUser(result.user);
        setEmail(result.user?.email);
        setName(result.user?.displayName);
        setLoggedIn(true);
        history.push('/')
        setError('')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GithubAuthProvider.credentialFromError(error);
        setError(errorMessage);
      });
  };

  // sign out
  const SignOut = () => {
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
      });
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
    GetPassword
  };
};

export default FirebaseSettings;
