import { useNavigate } from "react-router-dom";

const MenuPreviewCard = ({ img, name, price, desc }) => {
  const navigate = useNavigate();

  return (
    <article className="bg-[#ffffef] rounded-t-lg hover:shadow:3xl duration-300">
      <img src={img} alt={name} className="w-full rounded-t-lg h-64" />
      <div className="py-4 px-2">
        <p className="text-[#a62817] capitalize mb-2 font-bold">{name}</p>
        <p className="text-md text-slate-800 tracking-wide mb-4 text-justify">
          {desc}
        </p>
        <p className="mt-4 text-[#d75b3f]">{price} rsd</p>
        <div className="mt-4 flex gap-x-4">
          <button
            className="w-full py-4 bg-[#a62817] rounded-lg text-white font-bold"
            onClick={() => {
              navigate("/menu");
            }}
          >
            Go to Menu
          </button>
        </div>
      </div>
    </article>
  );
};

export default MenuPreviewCard;
