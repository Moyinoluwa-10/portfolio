import Buttons from "./buttons";

export default function Hero() {
  return (
    <div className="min-h-[calc(100vh-90px)] dark:bg-black dark:text-primary-100 px-5 py-10 font-semibold flex flex-col">
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
}
