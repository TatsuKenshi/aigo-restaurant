import { useState } from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import {
  menuItemsFull,
  menuItemsShort,
  sideDishes,
  introImages,
  menuPreview,
  people,
  story,
} from "../data";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import ScrollToTop from "../components/ScrollToTop";
import ScrollReset from "../components/ScrollReset";
// import i18n from "../i18n";
import { withNamespaces } from "react-i18next";

const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";

  const [item, setItem] = useState({});
  const [sidebarStatus, setSidebarStatus] = useState("hidden");

  return (
    <main>
      <ScrollReset>
        <Navbar />
        <Sidebar />
        <Hero />
        <section>
          {isPageLoading ? (
            <div></div>
          ) : (
            <Outlet
              context={{
                item,
                setItem,
                menuItemsFull,
                menuItemsShort,
                sideDishes,
                introImages,
                menuPreview,
                people,
                story,
                sidebarStatus,
                setSidebarStatus,
              }}
            />
          )}
        </section>
        <ScrollToTop />
        <Footer />
      </ScrollReset>
    </main>
  );
};

export default withNamespaces()(HomeLayout);
