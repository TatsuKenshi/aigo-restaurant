import hero from "../assets/images/hero-test.jpg";

const Hero = () => {
  return (
    <div className="w-screen h-[400px] lg:h-[500px] overflow:hidden">
      <img src={hero} alt="hero" className="object-cover h-full min-w-full" />
    </div>
  );
};

export default Hero;
