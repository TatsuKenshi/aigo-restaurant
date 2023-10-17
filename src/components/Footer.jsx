import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="p-8 bg-[#a62817] text-white">
      {/* content section */}
      <section className="max-w-[1200px] mx-auto h-full flex flex-wrap">
        <div className="w-full md:w-1/2 lg:w-1/4 mb-12 md:mb-8">
          <h4>{"FooterName"}</h4>
          <div className="h-[4px] w-full md:w-11/12 max-w-[1200px] bg-yellow-700 bg-opacity-70 my-2"></div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 mb-12 md:mb-8">
          <h4>{"FooterAbout"}</h4>
          <div className="h-[4px] w-full md:w-11/12 max-w-[1200px] bg-yellow-700 bg-opacity-70 my-2"></div>
          <p>
            {"FooterCompanySeat"} <br /> {"FooterCompanyAddress"}
          </p>
          <p>
            {"FooterHours"}
            <br />
            {"FooterHoursDisplay"}
          </p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 mb-12 md:mb-8">
          <h4>{"FooterContact"}</h4>
          <div className="h-[4px] w-full md:w-11/12 max-w-[1200px] bg-yellow-700 bg-opacity-70 my-2"></div>
          <p>
            {"FooterContactPhone"} <br />
            +381 66 426 624
          </p>
          <p>
            {"FooterContactEmail"}
            <br />
            <a href="" className="underline">
              office@akerman.rs
            </a>
            <br />
            <a href="" className="underline">
              adv@akerman.rs
            </a>
          </p>
        </div>

        {/* links section */}
        <div className="w-full md:w-1/2 lg:w-1/4 mb-12 md:mb-8">
          <h4>{"FooterLinks"}</h4>
          <div className="h-[4px] w-full md:w-11/12 max-w-[1200px] bg-yellow-700 bg-opacity-70 my-2"></div>
          <p>
            <Link to="/">{"Home"}</Link>
          </p>
          <p>
            <Link to="/menu">{"Menu"}</Link>
          </p>
          <p>
            <Link to="/contact">{"Contact"}</Link>
          </p>
          <p>
            <Link to="/about">{"About"}</Link>
          </p>
        </div>
        <div className="h-[4px] w-full max-w-[1200px] bg-yellow-700 bg-opacity-70 mx-auto my-2"></div>
      </section>

      {/* copyright section */}
      <section className="max-w-[1200px] mx-auto text-center">
        <h5 className="mr-1">
          &copy; {new Date().getFullYear()}
          <span className="ml-1">Aigo Eat</span>
        </h5>
        <h5 className="ml-1">All rights reserved.</h5>
      </section>
    </footer>
  );
};

export default Footer;
