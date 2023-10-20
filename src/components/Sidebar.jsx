import { NavLink } from "react-router-dom";
// import { withTranslation } from "react-i18next";
// import i18next from "i18next";
import { FaTimes } from "react-icons/fa";
// import eng from "../assets/eng.png";
// import ser2 from "../assets/ser2.png";
import { useNavigationContext } from "../context/NavigationContext";
// import logoTransparentan from "../assets/logoTransparentan.jpg";
import logo from "../assets/images/logo-small.png";

const Sidebar = () => {
  // const handleChange = (language) => {
  //   i18next.changeLanguage(language);
  // };

  const {
    sidebarStatus,
    rotateSidebarButton,
    setSidebarStatus,
    setRotateMenuButton,
    setRotateSidebarButton,
  } = useNavigationContext();

  return (
    <aside
      className={`z-[100] h-full w-full text-white bg-[#d75b3f]  bg-opacity-90 fixed top-0 right-0 sm:w-10/12 md:w-8/12 lg:hidden ${
        sidebarStatus === "hidden" ? "translate-x-full" : "translate-x-0"
      } ease-in-out duration-1000`}
    >
      {/* logo and toggle button section */}
      <section className="flex justify-between items-center px-8 h-24 bg-[#d75b3f] ">
        <div>
          <NavLink
            to="/"
            onClick={() => {
              setSidebarStatus("hidden");
              setRotateSidebarButton("animate-[spin_0.4s_1]");
              setRotateMenuButton("");
            }}
          >
            <span className="text-3xl font-bold">
              <img
                // src={logoTransparentan}
                src={logo}
                className="w-16 rounded-full sm:hidden "
                alt="company logo"
              />
            </span>
          </NavLink>
        </div>
        <div>
          <button
            type="button"
            className="lg:hidden float-right"
            onClick={() => {
              setSidebarStatus("hidden");
              setRotateSidebarButton("animate-[spin_0.4s_1]");
              setRotateMenuButton("");
            }}
          >
            {/* <FaTimes className={`fill-white h-8 w-8 ${rotateSidebarButton}`} /> */}
            <FaTimes className={`fill-white h-8 w-8 ${rotateSidebarButton}`} />
          </button>
        </div>
      </section>

      {/* links section */}
      <section className="text-center text-2xl mt-24">
        <div className="w-full py-2 px-auto mt-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-[#a62817] font-bold" : "hover:text-[#a62817]"
            }
            onClick={() => {
              setSidebarStatus("hidden");
              setRotateSidebarButton("animate-[spin_0.4s_1]");
              setRotateMenuButton("");
            }}
          >
            <span className="text-xl font-bold">{"Home"}</span>
          </NavLink>
        </div>

        <div className="w-full py-2 px-auto mt-8">
          <NavLink
            to="/menu"
            className={({ isActive }) =>
              isActive ? "text-[#a62817] font-bold" : "hover:text-[#a62817]"
            }
            onClick={() => {
              setSidebarStatus("hidden");
              setRotateSidebarButton("animate-[spin_0.4s_1]");
              setRotateMenuButton("");
            }}
          >
            <span className="text-xl font-bold">{"Menu"}</span>
          </NavLink>
        </div>

        <div className="w-full py-2 px-auto mt-8">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-[#a62817] font-bold" : "hover:text-[#a62817]"
            }
            onClick={() => {
              setSidebarStatus("hidden");
              setRotateSidebarButton("animate-[spin_0.4s_1]");
              setRotateMenuButton("");
            }}
          >
            <span className="text-xl font-bold">{"Contact"}</span>
          </NavLink>
        </div>

        <div className="w-full py-2 px-auto mt-8 mb-12">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-[#a62817] font-bold" : "hover:text-[#a62817]"
            }
            onClick={() => {
              setSidebarStatus("hidden");
              setRotateSidebarButton("animate-[spin_0.4s_1]");
              setRotateMenuButton("");
            }}
          >
            <span className="text-xl font-bold">{"About"}</span>
          </NavLink>
        </div>
      </section>

      {/* language buttons section */}
      <section className="flex justify-center">
        <div className="w-8 h-8 mr-6">
          <button
            onClick={() => {
              // handleChange("en");
              setSidebarStatus("hidden");
              setRotateSidebarButton("animate-[spin_0.4s_1]");
              setRotateMenuButton("");
            }}
            className="rounded-full"
          >
            <img src={logo} alt="" />
          </button>
        </div>

        <div className="w-8 h-8 ml-6">
          <button
            onClick={() => {
              // handleChange("sr");
              setSidebarStatus("hidden");
              setRotateSidebarButton("animate-[spin_0.4s_1]");
              setRotateMenuButton("");
            }}
            className="rounded-full"
          >
            <img src={logo} alt="" />
          </button>
        </div>
      </section>
    </aside>
  );
};

// export default withTranslation()(Sidebar);
export default Sidebar;
