"use client";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import CertificateOverlay from "./overlay";

interface CertificateCardProps {
  title: string;
  image: StaticImageData;
}

export default function CertificateCard({
  title,
  image,
}: CertificateCardProps) {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleOpen = () => {
    setShow(true);
  };

  return (
    <div className="bg-black text-white dark:bg-primary-100 dark:text-black font-semibold text-base md:text-xl rounded-xl overflow-hidden">
      <div className="overflow-hidden">
        <Image
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-all duration-300 hover:scale-125 hover:grayscale-0 cursor-pointer"
          onClick={handleOpen}
        />
      </div>
      <p className="p-3">{title}</p>
      <CertificateOverlay image={image} show={show} onClose={handleClose} />
    </div>
  );
}
