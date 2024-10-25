import Image, { StaticImageData } from "next/image";

interface CardProps {
  title: string;
  description: string;
  image: StaticImageData;
}

export default function Card({ title, description, image }: CardProps) {
  return (
    <div className="bg-black text-white dark:bg-primary-100 dark:text-black text-base md:text-xl rounded-xl overflow-hidden">
      <Image
        src={image}
        alt="image"
        className="w-full sm:aspect-video object-cover"
      />
      <div className="p-5">
        <p className="mb-3 font-semibold">{title}</p>
        <p className="mb-3 text-base">{description}</p>
      </div>
    </div>
  );
}
