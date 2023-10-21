import { useState, useEffect } from "react";
import { useOutletContext, useParams, useNavigate } from "react-router-dom";

const SingleMenuItem = () => {
  const { item, setItem, menuItemsFull, sideDishes } = useOutletContext();
  const [bigImage, setBigImage] = useState();
  const myID = useParams();
  const navigate = useNavigate();

  // const itemIngredients = Object.keys(item)
  //   .filter((key) => key.startsWith("ingredients"))
  //   .map((key) => item[key]);
  // const ingredientsObject = itemIngredients?.[0];

  const itemImages = Object.keys(item)
    .filter((key) => key.startsWith("imgs"))
    .map((key) => item[key]);
  const imagesObject = itemImages?.[0];

  useEffect(() => {
    setItem(menuItemsFull[myID.id]);
    setBigImage(item?.imgs?.[0]);
  }, [item?.imgs, myID.id, setItem, menuItemsFull, setBigImage]);

  return (
    <div className="mx-8 my-16 flex flex-wrap justify-between lg:max-w-[1200px] lg:mx-auto lg:px-8">
      <div className="flex flex-wrap w-full md:w-6/12 mb-4 md:mb-0 justify-between md:max-h-[400px]">
        <img
          src={bigImage}
          alt={item.name}
          className=" mb-5 w-full h-[350px] lg:h-[500px]"
        />
        {imagesObject &&
          imagesObject.map((image, index) => {
            return (
              <div key={index} className="w-1/6 h-20">
                <button
                  onClick={() => {
                    setBigImage(imagesObject[index]);
                  }}
                >
                  <img src={image} alt={image} className="w-40 h-20" />
                </button>
              </div>
            );
          })}
      </div>

      <div className="w-full md:w-6/12 mt-2 md:mt-0 pl-8">
        <p className="text-[#a62817] text-xl capitalize font-bold mb-4 lg:text-2xl">
          {item?.name}
        </p>
        <div className="w-full h-[1px] bg-slate-400 mb-4"></div>
        <p className="text-xl text-slate-800 tracking-wide mb-4 text-justify">
          <span className="text-[#d75b3f] font-bold">Description: </span>{" "}
          {item?.desc}
        </p>
        <div className="w-full h-[1px] bg-slate-400 mb-4"></div>
        <p className="text-xl text-slate-800 tracking-wide mb-4">
          <span className="text-[#d75b3f] font-bold">Options: </span>
          {item?.options?.map((option, index) => {
            return (
              <button
                key={index}
                className="py-1 px-1 text-white bg-[#a62817] mx-2 my-2 rounded-lg cursor-default"
              >
                {option}
              </button>
            );
          })}
        </p>
        <div className="w-full h-[1px] bg-slate-400 mb-4"></div>
        <p className="text-[#a62817] text-xl font-bold mb-4 lg:text-2xl text-justify">
          <span className="text-[#d75b3f]">Price: </span> {item?.price} rsd
        </p>

        <div className="w-full h-[1px] bg-slate-400 mb-4"></div>
        <p className="text-xl text-slate-800 tracking-wide mb-4">
          <span className="text-[#d75b3f] font-bold">Side Dishes: </span>
          {sideDishes.map((dish, index) => {
            return (
              <button
                key={index}
                className="py-1 px-1 text-white bg-[#a62817] mx-2 my-2 rounded-lg cursor-default"
              >
                {dish.name}
              </button>
            );
          })}
        </p>

        <button
          className="w-full py-4 bg-[#a62817] rounded-lg text-white font-bold mt-4"
          onClick={() => {
            navigate("/menu");
          }}
        >
          Back to Menu
        </button>
        <p className="text-xl text-slate-800 tracking-wide mt-8">
          Side dishes, as well as options marked with an asterisk (*), are
          charged extra.
        </p>
      </div>
    </div>
  );
};

export default SingleMenuItem;
