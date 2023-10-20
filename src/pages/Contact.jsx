import { useEffect } from "react";
import usePageTitle from "../hooks/usePageTitle";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  const { changeTitle } = usePageTitle();
  const language = "en";

  useEffect(() => {
    changeTitle({ language: language, enTitle: "Contact", srTitle: "Kontakt" });
  }, [language, changeTitle]);

  return (
    <div>
      <ContactForm />
    </div>
  );
};

export default Contact;
