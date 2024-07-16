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
      </div>
      <p>{quote}</p>
    </div>
  );
};

export default Card;
