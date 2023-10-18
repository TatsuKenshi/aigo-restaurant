import { useEffect } from "react";
import usePageTitle from "../hooks/usePageTitle";

const About = () => {
  const { changeTitle } = usePageTitle();
  const language = "en";

  useEffect(() => {
    changeTitle({ language: language, enTitle: "About", srTitle: "O nama" });
  }, [language, changeTitle]);

  return <div>About</div>;
};

export default About;
