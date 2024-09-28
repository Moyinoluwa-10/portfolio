import Image, { StaticImageData } from "next/image";

interface CardProps {
  name: string;
  title: string;
  quote: string;
  image: StaticImageData;
}

const Card = ({ name, title, quote, image }: CardProps) => {
  return (
    <div className="text-black dark:text-primary-100 flex flex-col sm:flex-row gap-8 max-w-2xl">
      <div>
        <Image
          src={image}
          alt="image"
          className="rounded-2xl max-w-52 aspect-square mx-auto sm:mx-0"
        />
        <div className="text-center md:text-left">
          <h3 className="mb-1 mt-4 font-semibold">{name}</h3>
          <p className="text-sm">{title}</p>
        </div>
      </div>
      <p>{quote}</p>
    </div>
  );
};

export default Card;
