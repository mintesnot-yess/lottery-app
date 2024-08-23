import { NavLink } from "react-router-dom";
import defProfilePic from "../assets/face10.jpg";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

export const Header = () => {
  const [userDetails, setUserDetails] = useState(null);

  const feachUserData = async () => {
    auth.onAuthStateChanged(async user => {
      console.log("No such document!");

      const docRef = doc(db, "Users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserDetails(docSnap.data());
      } else {
        console.log("No such document!");
      }
    });
  };

  useEffect(() => {
    feachUserData();
  }, []);
  return (
    <header className="w-90 d-flex jc-sb header">
      <ul className="d-flex g-10  ">
        <NavLink to="/" title="all games" className="d-flex g-5 c-center btn  links">
          <i className="fa fa-coins "> et</i>
        </NavLink>
      </ul>

      <ul className="d-flex g-10  ">
        <li title="my query" className="d-flex g-5 c-center btn">
          <i className="fa-solid fa-money-check-dollar" />
          <p id="querty_balance">100</p>
          ETB
        </li>
        {userDetails ? (
          <>
            <NavLink title={userDetails.firstName} to="/account">
              <li className="d-flex g-5 c-center btn">
                {userDetails.photoURL ? <img src={userDetails.photoUrl} alt="" /> : <img src={defProfilePic} alt="" />}
              </li>
            </NavLink>
          </>
        ) : (
          <>
            <NavLink to="/login" className="btn links">
              <span className="tx-color">LOGIN</span>
            </NavLink>
          </>
        )}{" "}
      </ul>
    </header>
  );
};
