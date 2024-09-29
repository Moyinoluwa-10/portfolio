"use client";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import ActivityOverlay from "./overlay";

interface CardProps {
  title: string;
  image: StaticImageData;
  description?: string[];
}

export default function Card({ title, image, description }: CardProps) {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleOpen = () => {
    setShow(true);
  };

  return (
    <div className="bg-black text-white dark:bg-primary-100 dark:text-black text-base md:text-xl rounded-xl overflow-hidden">
      <div className="overflow-hidden">
        <Image
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-all duration-300 hover:scale-125 hover:grayscale-0 cursor-pointer"
          onClick={handleOpen}
        />
      </div>
      <h3 className="p-3 font-semibold">{title}</h3>
      <ActivityOverlay
        title={title}
        description={description}
        show={show}
        onClose={handleClose}
      />
    </div>
  );
}
