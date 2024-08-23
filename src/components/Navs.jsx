import { NavLink } from "react-router-dom";

export const Navs = () => {
  return (
    <>
      <aside>
        <ul>
          <NavLink className="links btn logo " to="/">
            <i className="fa-solid fa-coins" />
          </NavLink>
        </ul>

        <ul>
          <NavLink className="side_nav" to="/account">
            <button title="Acccount">
              <i className="fa fa-user" aria-hidden="true" /> <span>acccount</span>
            </button>
          </NavLink>

          <NavLink className="side_nav" to="/">
            <button className=" side_nav active_nav" title="Home">
              <i className="fa fa-home" aria-hidden="true" /> <span>home</span>
            </button>
          </NavLink>

          <NavLink className="side_nav" to="/">
            <button title="Setting">
              <i className="fa-solid fa-gear" /> <span>setting</span>
            </button>
          </NavLink>
        </ul>
      </aside>
    </>
  );
};
