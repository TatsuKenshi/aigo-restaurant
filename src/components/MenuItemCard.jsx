import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

const MenuItemCard = ({ id, img, name, price, desc }) => {
  const { setItem } = useOutletContext();

  return (
    // <article className="w-[100%] md:w-[46%] mb-16 hover:shadow-lg">
    <article className="hover:shadow-lg">
      <div className="w-full max-h-[400px] md:max-h-[300px] lg:max-h-[400px]">
        <img
          src={img}
          alt={name}
          className="w-full rounded-t-md max-h-[400px] md:max-h-[300px] lg:max-h-[400px]"
        />
      </div>
      <div className="my-2 text-lg font-extrabold">
        <span className="text-[#a62817] capitalize">{name}</span>
        <span className="text-[#d75b3f] float-right">{price} rsd</span>
      </div>
      <div>
        <p className="text-xl text-slate-800 tracking-wide mb-4 text-justify">
          {desc}
        </p>
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
