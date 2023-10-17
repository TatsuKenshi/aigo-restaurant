import { useEffect } from "react";
import { useOutletContext, useParams } from "react-router-dom";

const SingleMenuItem = () => {
  const { item, setItem, menuItemsFull } = useOutletContext();
  const myID = useParams();

  const itemIngredients = Object.keys(item)
    .filter((key) => key.startsWith("ingredients"))
    .map((key) => item[key]);
  const ingredientsObject = itemIngredients?.[0];
  console.log(ingredientsObject);

  useEffect(() => {
    setItem(menuItemsFull[myID.id]);
  });

  return (
    <div className="text-3xl">
      <img src={item.img} alt={item.name} width="400px" />
      <h1>{item?.name}</h1>
      <h1>{item?.price} rsd</h1>
      <h1>{item?.desc}</h1>
      <p>
        {ingredientsObject?.map((ingredient, index) => {
          return (
            <span key={index}>
              {index < ingredientsObject?.length - 1
                ? ` ${ingredient}, `
                : ingredient}
            </span>
          );
        })}
      </p>
    </div>
  );
};

export default SingleMenuItem;
