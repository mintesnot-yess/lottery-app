import { NavLink } from "react-router-dom";
import { Header } from "../components/Header";
import { Navs } from "../components/Navs";

export const PageNotFond = () => {
  return (
    <div>
      <div className="container">
        <Navs />

        <main>
          <Header />
          <div className="contenet title ">
            <span>
              404 - Page is not found
              <NavLink to="/">
                <button className="btn title links">
                  <i className="fa fa-home" aria-hidden="true" />
                </button>
              </NavLink>
            </span>
          </div>
        </main>
      </div>
    </div>
  );
};
