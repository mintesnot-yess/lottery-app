import GoogleButton from "react-google-button";
import { useState } from "react";

import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";

import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { NavLink } from "react-router-dom";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async e => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);

      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: email,
          firstName: firstName,
          lastName: lastName,
          uid: user.uid,
          timestamp: Date.now()
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSignInwidthGoogle = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider).then(async result => {
      if (result.user) {
        const user = auth.currentUser;

        console.log(user);
      } else {
        console.log("No user signed in");
      }

      console.log(result.user);
    });
  };

  return (
    <>
      <div className="user_controll">
        <div className="user_profile">
          <div className="form_container">
            <form onSubmit={handleRegister} action="">
              <span className="tx-color title">Register </span>

              <label>
                <span>First Name</span>
                <input onChange={e => setfirstName(e.target.value)} type="text" placeholder="first name" />
              </label>
              <label>
                <span>Last Name</span>
                <input onChange={e => setlastName(e.target.value)} type="text" placeholder="last name" />
              </label>
              <label>
                <span>Email</span>
                <input onChange={e => setEmail(e.target.value)} type="email" placeholder="email address" />
              </label>
              <label>
                <span>Password</span>
                <input onChange={e => setPassword(e.target.value)} type="password" placeholder="passsword" />
              </label>
              <button type="submit">REGISTER</button>
            </form>

            <span className="tx-center tx-color or">OR</span>

            <div className="auth-methods">
              <NavLink className="links" to="/login">
                Login
              </NavLink>
              <div className="google">
                <GoogleButton onClick={handleSignInwidthGoogle} />
              </div>
            </div>
          </div>
          <div className="detail" />
        </div>
      </div>
    </>
  );
};
