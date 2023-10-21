import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Story = () => {
  const { story } = useOutletContext();
  const [index, setIndex] = useState(0);
  const { name, image, text, text2, text3 } = story[index];

  const nextStory = () => {
    setIndex((currentIndex) => {
      const newIndex = (currentIndex + 1) % story.length;
      return newIndex;
    });
  };

  const prevStory = () => {
    setIndex((currentIndex) => {
      const newIndex = (currentIndex - 1 + story.length) % story.length;
      return newIndex;
    });
  };

  return (
    <section className="py-8 px-8 ">
      {/* title div */}
      <div className="text-center max-w-[1200px] mx-auto">
        <h1 className="text-[#a62817] text-3xl font-extrabold">
          Aigo Story so far...
        </h1>
        <div className="h-1 w-48 bg-[#a62817] mx-auto mt-1"></div>
        <p className="mt-4 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          adipisci totam explicabo beatae, doloremque repellendus. Eveniet
          veniam dolore ad distinctio iusto sed provident eos in magni, vero
          reiciendis inventore quisquam? Maxime a sint mollitia tenetur ipsa
          tempora harum autem, ullam laborum est adipisci iste atque quas
          excepturi modi. Esse, magnam?
        </p>
      </div>

      <article className="mt-8 max-w-[900px] mx-auto bg-white">
        <div className="w-full mb-4 h-[250px] sm:h-[450px]">
          <img src={image} alt={name} className="w-full h-full" />
        </div>
        <div className="pt-2 pb-12">
          <button type="button" className="float-left" onClick={prevStory}>
            <FaChevronLeft size="3rem" className="fill-[#a62817]" />
          </button>
          <button type="button" className="float-right" onClick={nextStory}>
            <FaChevronRight size="3rem" className="fill-[#a62817]" />
          </button>
        </div>
        <div className="py-4 px-2">
          <p className="mb-4 text-[#a62817] capitalize font-bold text-2xl">
            {name}
          </p>
          <p className="text-md text-slate-800 text-justify">{text}</p>
          {text2 && (
            <p className="text-md mt-4 text-slate-800 text-justify">{text2}</p>
          )}
          {text3 && (
            <p className="text-md mt-4 text-slate-800 text-justify">{text2}</p>
          )}
        </div>
      </article>
    </section>
  );
};
export default Story;
