import { useState } from "react";

import { auth } from "../firebase";

import { signInWithEmailAndPassword } from "firebase/auth";
import { NavLink } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleLogin = async e => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="user_controll">
        <div className="user_profile">
          <div className="form_container">
            <form onSubmit={handleLogin} action="">
              <span className="tx-color title">LOGIN </span>

              <label>
                <span>Email</span>
                <input onChange={e => setEmail(e.target.value)} type="email" placeholder="email address" />
              </label>
              <label>
                <span>Password</span>
                <input onChange={e => setPassword(e.target.value)} type="password" placeholder="passsword" />
              </label>
              <button type="submit">LOGIN</button>
            </form>

            <span className="tx-center tx-color or">OR</span>

            <div className="auth-methods">
              <NavLink className="links" to="/register">
                Register{" "}
              </NavLink>
            </div>
          </div>
          <div className="detail" />
        </div>
      </div>
    </>
  );
};
