import Buttons from "./buttons";

const Hero = () => {
  return (
    <div className="min-h-screen md:min-h-[800px] md:h-screen md:max-h-[850px] dark:bg-black dark:text-primary-100 px-5 pt-20 font-semibold">
      <div className="container h-full grid">
        <div>
          <h1 className="text-[86px] md:text-[144px] lg:text-[250px] leading-tight text-center mb-20">
            Moyin
          </h1>
          <Buttons />
        </div>
      </div>
    </div>
  );
};

export default Hero;
