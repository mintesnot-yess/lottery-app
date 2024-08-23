import Face1 from "../assets/face10.jpg";
import { NavLink } from "react-router-dom";

export const Games_1 = () => {
  return (
    <>
      <div className="game_play_controller">
        <div className="game_container">
          <header className="card_container">
            <NavLink to="/">
              <button className="btn">
                <i className="fa fa-angle-left" aria-hidden="true" />
              </button>
            </NavLink>
          </header>

          <div className="choosed_num">
            <div className="latest_win ">
              <input type="button" className="latest_win_num btn" value={121212} />
            </div>

            <div className="d-flex">
              <span className="countdown"> </span>
            </div>
            <div className="number_choosed">
              <input type="button" className="btn choosed_numbers1  " />
              <input type="button" className="btn choosed_numbers2 " />
              <input type="button" className="btn choosed_numbers3  " />
              <input type="button" className="btn choosed_numbers4  " />
              <input type="button" className="btn  choosed_numbers5 " />
            </div>
            <span> Choose 5 number </span>
          </div>

          <div className="numbers">
            <button className="btn "> 0 </button>
            <button className="btn "> 1 </button>
            <button className="btn "> 2 </button>
            <button className="btn "> 3 </button>
            <button className="btn "> 4 </button>
            <button className="btn "> 5 </button>
            <button className="btn "> 6 </button>
            <button className="btn "> 7 </button>
            <button className="btn "> 8 </button>
            <button className="btn "> 9 </button>
          </div>
          <div className="numbers">
            <button className="btn play_btn">Make A Payment</button>
          </div>

          <div className="card_container">
            <div className="card">
              <div className="table_controll">
                <ul>
                  <li className="t-center">winner list</li>
                </ul>

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

            <div className="counting_alert_cont">
              <div className="counting_container ">
                <h2>Time is counting</h2>
                <h1 className="countdown" />
                <p>after countdown you winn 1000$</p>
              </div>
            </div>
          </div>
        </div>

        <div className="win_alert_cont">
          <div className="winner_container ">
            <h2>you Winn</h2>
            <h1>1000ETB</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, magnam.</p>
            <div className="btns d-flex g-10 ">
              <button className="btn">with draw</button>
              <button className="btn">play angain</button>
            </div>
          </div>
        </div>

        <div className="lost_alert_cont ">
          <div className="loser_container  ">
            <h2>you lost</h2>
            <p>
              wining number is <small id="win_num">12323</small>
            </p>
            <h1>-100ETB</h1>
            <button className="btn">try again</button>
          </div>
        </div>
      </div>
    </>
  );
};
