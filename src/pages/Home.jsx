import { NavLink } from "react-router-dom";
import Face1 from "../assets/face10.jpg";
import Numbers_image from "../assets/numbers.jpg";
import Spin_image from "../assets/spin.jpg";
export const Home = () => {
  return (
    <>
      <div className="home">
        <article>
          <div className="contenet">
            <span>10000</span>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, magnam.</p>
            <NavLink to="/games">
              <button>Play now</button>
            </NavLink>
          </div>
        </article>
        <div className="card_container">
          <div className="card">
            <span>
              <i className="fa fa-dice"> games</i>{" "}
            </span>

            <img src={Numbers_image} alt="" />
            <h3>Lottery 1</h3>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <button>play</button>

            <div className="table_controll">
              <ul className="title_list">
                <li>player</li>
                <li>reward</li>
                <li>date</li>
              </ul>

              <ul>
                <li className="user_profile">
                  <img src={Face1} alt="" /> <span className="name">mintesnoteddddddd</span>
                </li>
                <li>
                  <span>1000</span> <i>ETB</i>
                </li>
                <li>jun/29/24</li>
              </ul>
              <ul>
                <li className="user_profile">
                  <img src={Face1} alt="" /> <span className="name">mintesnoteddddddd</span>
                </li>
                <li>
                  <span>1000</span> <i>ETB</i>
                </li>
                <li>jun/29/24</li>
              </ul>
            </div>
          </div>

          <div className="card">
            <span>
              {" "}
              <i className="fa fa-dice"> games </i>{" "}
            </span>

            <img src={Spin_image} alt="" />
            <h3>Lottery 2</h3>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <button>play</button>

            <div className="table_controll">
              <ul className="title_list">
                <li>player</li>
                <li>reward</li>
                <li>date</li>
              </ul>

              <ul>
                <li className="user_profile">
                  <img src={Face1} alt="" /> <span className="name">mintesnote</span>
                </li>
                <li>
                  <span>1000</span> <i>ETB</i>
                </li>
                <li>jun/29/24</li>
              </ul>

              <ul>
                <li className="user_profile">
                  <img src={Face1} alt="" /> <span className="name">mintesnoteddddddd</span>
                </li>
                <li>
                  <span>1000</span> <i>ETB</i>
                </li>
                <li>jun/29/24</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
