import { useEffect } from "react";
import usePageTitle from "../hooks/usePageTitle";
import Team from "../components/Team";
import Map from "../components/Map";
import Story from "../components/Story";
import i18n from "../i18n";
import { withNamespaces } from "react-i18next";

const About = () => {
  // page title customization and localization
  const { changeTitle } = usePageTitle();
  const language = i18n.language;
  console.log(language);

  useEffect(() => {
    changeTitle({ language: language, enTitle: "About", srTitle: "O nama" });
  }, [language, changeTitle]);

  return (
    <div>
      <Map />
      <Story />
      <Team />
    </div>
  );
};

export default withNamespaces()(About);
