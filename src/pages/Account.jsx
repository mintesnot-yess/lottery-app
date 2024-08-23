import { useState, useEffect } from "react";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import defProfilePic from "../assets/face10.jpg";

export const Account = () => {
  const [userDetails, setUserDetails] = useState(null);

  const feachUserData = async () => {
    auth.onAuthStateChanged(async user => {
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

  const LogOut = () => {
    auth.signOut().then(() => {
      console.log("Signed out successfully");
      window.location.href = "/register";
    });
  };

  return (
    <>
      {userDetails ? (
        <>
          <div className="user_controll">
            <div className="user_profile">
              {userDetails.photoURL ? <img src={userDetails.photoUrl} alt="" /> : <img src={defProfilePic} alt="" />}

              <div className="detail">
                <h2>
                  {userDetails.firstName}-{userDetails.lastName}
                </h2>
                <h3>{userDetails.email}</h3>
                <button>edit profile</button>
                <button onClick={LogOut}>LOGOUT</button>
              </div>
            </div>
            <div className="table_controll">
              <ul className="title_list">
                <li>#</li>
                <li>reward</li>
                <li>date</li>
                <li>winn</li>
              </ul>

              <ul>
                <li className="user_profile">
                  <span className="name">21334</span>
                </li>
                <li>
                  <span>1000</span> <i>ETB</i>
                </li>
                <li className="countdown">wait</li>
                <li>-</li>
              </ul>
              <ul>
                <li className="user_profile">
                  <span className="name">112003</span>
                </li>
                <li>
                  <span>1000</span> <i>ETB</i>
                </li>
                <li>jun/29/24</li>
                <li>win</li>
              </ul>
              <ul>
                <li className="user_profile">
                  <span className="name">223311</span>
                </li>
                <li>
                  <span>1000</span> <i>ETB</i>
                </li>
                <li>jun/29/24</li>
                <li>lost</li>
              </ul>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="user_controll">
            <h1 className="t-center tx-color">loading ...</h1>
          </div>
        </>
      )}{" "}
    </>
  );
};
