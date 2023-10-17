import MenuItemCard from "../components/MenuItemCard";
import { useOutletContext } from "react-router-dom";

const Menu = () => {
  const { menuItemsShort } = useOutletContext();

  return (
    <section className="px-8">
      {/* title div */}
      <div className="text-center my-8">
        <h1 className="text-[#a62817] text-3xl font-extrabold">Our Menu</h1>
        <div className="h-1 w-48 bg-[#a62817] mx-auto mt-1"></div>
      </div>

      <div className="flex flex-wrap justify-between max-w-[1200px] mx-auto ">
        {menuItemsShort.map((item) => {
          return <MenuItemCard key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default Menu;
