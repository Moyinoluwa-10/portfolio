import Carousel from "./carousel";

export default function Testimonials() {
  return (
    <div className="px-5 py-16 bg-alt-4">
      <div className="container">
        <h3 className="text-2xl text-[#131313] dark:text-white mb-16 font-semibold">
          Testimonials and Recommendations
        </h3>
        <Carousel />
      </div>
    </div>
  );
}
