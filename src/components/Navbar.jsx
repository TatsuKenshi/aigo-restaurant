import { NavLink, Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaBars } from "react-icons/fa";
import logo from "../assets/images/logo-small.png";
import { useNavigationContext } from "../context/NavigationContext";

const Navbar = () => {
  const {
    setSidebarStatus,
    rotateMenuButton,
    setRotateMenuButton,
    setRotateSidebarButton,
  } = useNavigationContext();

  return (
    <nav className="px-8 h-24 bg-[#d75b3f] text-white drop-shadow-2xl">
      <section className="flex justify-between max-w-[1200px] mx-auto">
        {/* logo */}
        <div className="">
          <NavLink to="/">
            <span className="h-24 flex items-center">
              <img src={logo} alt="logo" className="w-16" />
            </span>
          </NavLink>
        </div>

        {/* navigation links */}
        <div className="hidden lg:block">
          <ul className="h-24 flex items-center gap-6 text-2xl">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/menu">Menu</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </div>

        {/* social links */}
        <div>
          <ul className="h-24 items-center gap-4 hidden lg:flex text-[#ffffef]">
            <li>
              <Link to="https://wwww.facebook.com" target="_blank">
                <FaFacebook size="1.5rem" />
              </Link>
            </li>
            <li>
              <Link to="https://wwww.twitter.com" target="_blank">
                <FaTwitter size="1.5rem" />
              </Link>
            </li>
            <li>
              <Link to="https://wwww.instagram.com" target="_blank">
                <FaInstagram size="1.5rem" />
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex h-24 items-center lg:hidden">
          <button
            type="button"
            onClick={() => {
              setSidebarStatus("block");
              setRotateMenuButton("animate-[spin_0.4s_1]");
              setRotateSidebarButton("");
            }}
          >
            <FaBars className={`fill-white h-8 w-8 ${rotateMenuButton}`} />
          </button>
        </div>
      </section>

      {/* sidebar menu button section */}
      {/* <section className="flex h-full items-center">
        <div className="w-6 mr-4">
          <button
            type="button"
            className="p-1 mr-4 lg:hidden"
            onClick={() => {
              setSidebarStatus("block");
              setRotateMenuButton("animate-[spin_0.4s_1]");
              setRotateSidebarButton("");
            }}
          >
            <FaBars className={`fill-white h-8 w-8 ${rotateMenuButton}`} />
          </button>
        </div>
      </section> */}
    </nav>
  );
};

export default Navbar;
