import { useEffect } from "react";
import usePageTitle from "../hooks/usePageTitle";

const Contact = () => {
  const { changeTitle } = usePageTitle();
  const language = "en";

  useEffect(() => {
    changeTitle({ language: language, enTitle: "Contact", srTitle: "Kontakt" });
  }, [language, changeTitle]);

  return <div>Contact</div>;
};

export default Contact;
