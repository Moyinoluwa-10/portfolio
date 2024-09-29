import Image, { StaticImageData } from "next/image";

export default function Card({
  title,
  image,
}: {
  title: string;
  image: StaticImageData;
}) {
  return (
    <div className="bg-black text-white dark:bg-primary-100 dark:text-black font-semibold text-sm md:text-xl rounded-xl overflow-hidden">
      <Image src={image} alt="image" className="w-full" />
      <p className="p-3">{title}</p>
    </div>
  );
}
