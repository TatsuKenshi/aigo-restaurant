import { useEffect } from "react";
import usePageTitle from "../hooks/usePageTitle";
import Intro from "../components/Intro";
import MenuPreview from "../components/MenuPreview";
import ContactSection from "../components/ContactSection";
import AboutSection from "../components/AboutSection";
import i18n from "../i18n";
import { withNamespaces } from "react-i18next";

const HomePage = () => {
  // page title customization and localization
  const { changeTitle } = usePageTitle();
  const language = i18n.language;
  console.log(language);

  useEffect(() => {
    changeTitle({ language: language, enTitle: "Home", srTitle: "Početna" });
  }, [language, changeTitle]);

  return (
    <section>
      <Intro />
      <MenuPreview />
    </section>
  );
};

export default withNamespaces()(HomePage);
