import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut().then((result) => {
      console.log(result);
      navigate("/");
    });
  };

  return (
    <div className="">
      <nav className="bg-gray-50 py-1   ">
        <div
          data-aos="fade-down"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
          className="navbar items-center container mx-auto xl:px-0"
        >
          <div className="navbar-start">
            <div className="dropdown ">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden px-0 pr-2"
              >
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
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>

              <ul
                tabIndex={2}
                className="menu menu-sm relative  dropdown-content mt-3 z-50 bg-white  p-2 shadow rounded-2xl w-48"
              >
                <li className="">
                  <NavLink
                    to={"/"}
                    className={({ isActive }) =>
                      isActive
                        ? "py-1 bg-transparent rounded-none border-b-2 border-b-[#012A2D] text-[#012A2D"
                        : "font-bold py-1 hover:rounded-none text-[#012A2D] hover:bg-none  hover:border-b-2 border-b-2 rounded-none border-b-transparent  hover:border-b-[#012A2D]"
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li className="">
                  <NavLink
                    to={"/artlists"}
                    className={({ isActive }) =>
                      isActive
                        ? "py-1 bg-transparent rounded-none border-b-2 border-b-[#012A2D] text-[#012A2D]"
                        : "font-bold py-1 hover:rounded-none text-[#012A2D] hover:bg-none  hover:border-b-2 border-b-2 rounded-none border-b-transparent hover:border-b-[#012A2D] "
                    }
                  >
                    All Art & Craft
                  </NavLink>
                </li>
                {user && (
                  <>
                    <li>
                      <NavLink
                        to={"/addcraft"}
                        className={({ isActive }) =>
                          isActive
                            ? "py-1 bg-transparent rounded-none border-b-2 border-b-[#012A2D] text-[#012A2D"
                            : "font-bold py-1 hover:rounded-none text-[#012A2D] hover:bg-none  hover:border-b-2 border-b-2 rounded-none border-b-transparent  hover:border-b-[#012A2D]"
                        }
                      >
                        Add Craft
                      </NavLink>
                    </li>

                    <li className="">
                      <NavLink
                        to={"/allartcraft"}
                        className={({ isActive }) =>
                          isActive
                            ? "py-1 bg-transparent rounded-none border-b-2 border-b-[#012A2D] text-[#012A2D"
                            : "font-bold py-1 hover:rounded-none text-[#012A2D] hover:bg-none  hover:border-b-2 border-b-2 rounded-none border-b-transparent  hover:border-b-[#012A2D]"
                        }
                      >
                        My Lists
                      </NavLink>
                    </li>
                  </>
                )}
              </ul>
            </div>
            <Link
              to="/"
              className="xl:text-5xl lg:text-4xl md:text-3xl text-xl font-bold text-[#012A2D] "
            >
              Art Bangla
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu flex flex-row items-center gap-5 font-bold xl:text-lg">
              <li className="">
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive
                      ? "py-1 bg-transparent rounded-none border-b-2 border-b-[#012A2D] text-[#012A2D]"
                      : "font-bold py-1 hover:rounded-none text-[#012A2D] hover:bg-none  hover:border-b-2 border-b-2 rounded-none border-b-transparent  hover:border-b-[#012A2D]"
                  }
                >
                  Home
                </NavLink>
              </li>

              <li className="">
                <NavLink
                  to={"/allartcraft"}
                  className={({ isActive }) =>
                    isActive
                      ? "py-1 bg-transparent rounded-none border-b-2 border-b-[#012A2D] text-[#012A2D]"
                      : "font-bold py-1 hover:rounded-none text-[#012A2D] hover:bg-none  hover:border-b-2 border-b-2 rounded-none border-b-transparent  hover:border-b-[#012A2D]"
                  }
                >
                  All Art & Craft
                </NavLink>
              </li>
              {user && (
                <>
                  <NavLink
                    to={"/addcraft"}
                    className={({ isActive }) =>
                      isActive
                        ? "py-1 bg-transparent rounded-none border-b-2 border-b-[#012A2D] text-[#012A2D"
                        : "font-bold py-1 hover:rounded-none text-[#012A2D] hover:bg-none  hover:border-b-2 border-b-2 rounded-none border-b-transparent  hover:border-b-[#012A2D]"
                    }
                  >
                    Add Craft
                  </NavLink>

                  <li className="">
                    <NavLink
                      to={"/artlists"}
                      className={({ isActive }) =>
                        isActive
                          ? "py-1 bg-transparent rounded-none border-b-2 border-b-[#012A2D] text-[#012A2D]"
                          : "font-bold py-1 hover:rounded-none text-[#012A2D] hover:bg-none border-b-2 rounded-none border-b-transparent   hover:border-b-2 hover:border-b-[#012A2D] "
                      }
                    >
                      My Lists
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
          <div className="navbar-end flex xl:gap-8 md:gap-5 gap-3">
            {user ? (
              <div className="flex items-center md:gap-5 gap-3">
                <div className="dropdown dropdown-hover">
                  <div tabIndex={0} className="">
                    <img
                      className="md:h-12 h-10 md:w-12 w-10 rounded-full"
                      src={user.photoURL}
                      alt=""
                    />
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content -ml-36 z-10 menu p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <p>{user.displayName}</p>
                    </li>
                    <li>
                      <Link
                        onClick={handleLogout}
                        className="xl:px-3 px-2 xl:py-2 md:py-2 md:px-5 py-1 md:font-bold font-semibold md:text-base hover:bg-[#012A2D] text-sm bg-[#012A2D] text-white"
                      >
                        Logout
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="flex items-center md:gap-8 gap-2">
                <Link to="/login">
                  <button className="xl:px-3 px-2 xl:py-2 md:py-2 md:px-5 py-1 md:font-bold font-semibold md:text-base text-sm bg-[#012A2D] text-white">
                    Login
                  </button>
                </Link>
                <Link to="/register">
                  <button className="xl:px-3 px-2 xl:py-2 md:py-2 md:px-5 py-1 md:font-bold font-semibold md:text-base text-sm bg-[#012A2D] text-white">
                    Register
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
