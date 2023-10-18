import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

const MenuItemCard = ({ id, img, name, price, desc }) => {
  const { setItem } = useOutletContext();

  return (
    <article className="w-[100%]  md:w-[45%] mb-8">
      <img src={img} alt={name} className="w-full  rounded-t-md" />
      <div className="my-2 text-lg font-extrabold ">
        <span className="text-[#a62817] capitalize">{name}</span>
        <span className="text-[#d75b3f] float-right">{price} rsd</span>
      </div>
      <div className="">
        <p>{desc}</p>
      </div>
      <Link to={`/menuitem/${id}`}>
        <button
          type="button"
          className="w-full py-3 bg-[#a62817] rounded-md text-white mt-2"
          onClick={() => setItem(id)}
        >
          More Info
        </button>
      </Link>
    </article>
  );
};

export default MenuItemCard;
