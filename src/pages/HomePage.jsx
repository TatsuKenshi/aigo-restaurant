// import Hero from "../components/Hero";
import { useEffect } from "react";
import usePageTitle from "../hooks/usePageTitle";
import Intro from "../components/Intro";
import MenuPreview from "../components/MenuPreview";
import ContactSection from "../components/ContactSection";
import AboutSection from "../components/AboutSection";

const HomePage = () => {
  const { changeTitle } = usePageTitle();
  const language = "sr";

  useEffect(() => {
    changeTitle({ language: language, enTitle: "Home", srTitle: "Početna" });
  }, [language, changeTitle]);

  return (
    <section>
      {/* title div */}
      <div className="text-center my-8">
        <h1 className="text-[#a62817] text-3xl font-extrabold">Aigo Eat</h1>
        <div className="h-1 w-48 bg-[#a62817] mx-auto mt-1"></div>
      </div>

      <Intro />
      <MenuPreview />
      <ContactSection />
      <AboutSection />
    </section>
  );
};

export default HomePage;
