import MenuPreviewCard from "./MenuPreviewCard";
import { useOutletContext } from "react-router-dom";

const MenuPreview = () => {
  const { menuPreview } = useOutletContext();

  return (
    <section className="py-8 px-8 bg-white">
      {/* title div */}
      <div className="text-center my-8 max-w-[1200px] mx-auto">
        <h1 className="text-[#a62817] text-3xl font-extrabold">
          Menu sneak peek
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

      <div className="max-w-[1200px] mx-auto grid md:grid-cols-3 gap-8">
        {menuPreview.map((menuItem) => {
          return <MenuPreviewCard key={menuItem.id} {...menuItem} />;
        })}
      </div>
    </section>
  );
};

export default MenuPreview;