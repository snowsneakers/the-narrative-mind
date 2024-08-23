const MainImage = () => {
  return (
    <div className="mx-[-1.25rem]">
      <img
        src="assets/desktop-hero.jpeg"
        alt="hero"
        className="m-auto hidden med:block max-h-72 w-full object-cover bg-center px-5"
      />
      <img
        src="assets/desktop-hero.jpeg"
        alt="hero"
        className="m-auto hidden xxs:block med:hidden"
      />
      <img
        src="assets/mobile-hero.jpeg"
        alt="hero"
        className="m-auto block xxs:hidden"
      />
    </div>
  );
};

export default MainImage;
