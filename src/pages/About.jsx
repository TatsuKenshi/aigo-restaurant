import { useEffect } from "react";
import usePageTitle from "../hooks/usePageTitle";
import Team from "../components/Team";
import Map from "../components/Map";
import Story from "../components/Story";

const About = () => {
  const { changeTitle } = usePageTitle();
  const language = "en";

  useEffect(() => {
    changeTitle({ language: language, enTitle: "About", srTitle: "O nama" });
  }, [language, changeTitle]);

  return (
    <div>
      <Map />
      <Team />
      <Story />
    </div>
  );
};

export default About;
