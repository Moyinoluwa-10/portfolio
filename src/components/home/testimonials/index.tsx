import Carousel from "./carousel";

const Testimonials = () => {
  return (
    <div className="px-5 py-16 bg-alt-4">
      <div className="container">
        <h3 className="text-2xl text-[#131313] dark:text-white mb-16">
          Testimonials and Recommendations
        </h3>
        <Carousel />
      </div>
    </div>
  );
};

export default Testimonials;
