import Buttons from "./buttons";

const Hero = () => {
  return (
    <div className="min-h-[calc(100vh-70px)] md:min-h-[800px] md:h-screen md:max-h-[850px] dark:bg-black dark:text-primary-100 px-5 font-semibold flex flex-col">
      <div className="container grid items-center flex-grow">
        <div>
          <h1 className="text-[86px] md:text-[144px] lg:text-[250px] leading-none text-center mb-20">
            Moyin
          </h1>
          <Buttons />
        </div>
      </div>
    </div>
  );
};

export default Hero;
