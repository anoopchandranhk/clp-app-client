// import { useContext } from "react";
// import { ThemeContext } from "../themes/themeContext";
// import themes from "../themes/index";
import { Link } from "react-router-dom";

const Navbar = () => {
  // const { setTheme } = useContext(ThemeContext);
  return (
    <div className="navbar bg-base-200">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-300 rounded-box w-52"
          >
            <li>
              <a href="/client">
                <>Client page</>
              </a>
            </li>
            <li>
              <a href={"/dashboard"}>
                <>Dashboard</>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold italic uppercase">Pollsy</h1>
        </div>
      </div>
      <div className="navbar-center px-2 mx-2 lg:flex">
        <div className="flex items-stretch">
          <Link to={"/client"}>
            <p className="btn btn-ghost btn-sm rounded-btn">Client page</p>
          </Link>
          <Link to={"/dashboard"}>
            <p className="btn btn-ghost btn-sm rounded-btn">Dashboard</p>
          </Link>
        </div>
      </div>
      <div className="navbar-end">
        <div className="dropdown">
          {/* <div
            tabIndex={1}
            className="flex flex-row justify-center items-center gap-2 btn btn-ghost"
          >
            <svg
              width="18"
              height="18"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-5 w-5 stroke-current md:h-6 md:w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
              ></path>
            </svg>
            <span>themes</span>
          </div> */}
          {/* <ul
            tabIndex={1}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-300 rounded-box w-52"
          >
            {Object.keys(themes).map((key) => {
              return (
                <li key={key} onClick={() => setTheme(key)}>
                  <a className="capitalize">{key}</a>
                </li>
              );
            })}
          </ul> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
