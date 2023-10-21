import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useOutletContext } from "react-router-dom";

import Slider from "react-slick";

const SlickCarousel = () => {
  const { introImages } = useOutletContext();

  const settings = {
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    // fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  return (
    <section className="w-full">
      <Slider {...settings}>
        {introImages.map((introImage) => {
          const { id, image, name } = introImage;
          return (
            <article key={id}>
              <img
                src={image}
                alt={name}
                className="w-full h-full max-h-[600px]"
              />
            </article>
          );
        })}
      </Slider>
    </section>
  );
};

export default SlickCarousel;
