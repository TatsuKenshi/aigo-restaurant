import { useState } from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { menuItemsFull, menuItemsShort } from "../data";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import ScrollToTop from "../components/ScrollToTop";
import ScrollReset from "../components/ScrollReset";

const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";

  const [item, setItem] = useState({});

  return (
    <main className="bg-yellow-100 min-h-screen">
      <ScrollReset>
        <Navbar />
        <Sidebar />
        <Hero />
        <section>
          {isPageLoading ? (
            <div></div>
          ) : (
            <Outlet
              context={{ item, setItem, menuItemsFull, menuItemsShort }}
            />
          )}
        </section>
        <ScrollToTop />
        <Footer />
      </ScrollReset>
    </main>
  );
};

export default HomeLayout;
