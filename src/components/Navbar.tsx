import { Link } from "react-router-dom";

const Navbar = () => {
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
        <div className="dropdown"></div>
      </div>
    </div>
  );
};

export default Navbar;
