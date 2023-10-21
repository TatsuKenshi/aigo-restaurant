const SideDishCard = ({ img, name, price, desc }) => {
  return (
    <article className="flex justify-between flex-wrap py-2">
      <div className="w-full sm:w-4/12 lg:w-3/12 max-h-[250px]">
        <img
          src={img}
          alt={name}
          className="w-full max-h-[250px] sm:max-h-[175px]"
        />
      </div>
      <div className="my-4 sm:w-8/12 lg:w-9/12 sm:my-0 sm:pl-4">
        <p className="text-[#a62817] capitalize text-lg font-extrabold">
          {name}
        </p>
        <p className="text-xl text-slate-800 tracking-wide mb-4 text-justify">
          {desc}
        </p>
        <p className="text-[#d75b3f] float-right text-lg font-bold sm:float-left">
          {price} rsd
        </p>
      </div>
    </article>
  );
};

export default SideDishCard;
