const Map = () => {
  return (
    <section className="px-8">
      {/* title div */}
      <div className="text-center my-8 max-w-[1200px] mx-auto">
        <h1 className="text-[#a62817] text-3xl font-extrabold">
          How to find us
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

      <div className="flex justify-center w-full">
        <div className="flex justify-center w-full max-w-[900px] max-h-[550px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11321.42131448125!2d20.4243859!3d44.8143253!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a65d8c222aa0d%3A0xf898147ec93450ba!2sAigo.eat!5e0!3m2!1sen!2srs!4v1697824746430!5m2!1sen!2srs"
            className="h-80 sm:h-96 inherit w-screen px-8 sm:px-0"
            style={{
              border: 0,
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Map;
