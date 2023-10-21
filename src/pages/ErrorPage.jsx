import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 5000);
  });
  return (
    <main>
      {/* error and redirection message section */}
      <div className="mt-[30vh] text-center mx-4">
        <h1 className="text-9xl font-bold text-[#a62817]">404</h1>
        <p className="text-xl font-bold text-[#a62817]  text-justify">
          Ova stranica ne postoji.
        </p>
        <p className="text-xl font-bold text-[#a62817]  text-justify">
          This page does not exist.
        </p>
        <p className="text-[#d75b3f]  text-justify">
          Uskoro ćete biti prebačeni na Početnu stranicu.
        </p>
        <p className="mb-16 text-[#d75b3f]  text-justify">
          You will be redirected to the Home page shortly.
        </p>
      </div>
    </main>
  );
};

export default ErrorPage;
