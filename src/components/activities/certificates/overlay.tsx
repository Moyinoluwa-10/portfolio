import { useState } from "react";
import Image, { StaticImageData } from "next/image";

const CertificateOverlay = ({ image }: { image: StaticImageData }) => {
  return (
    <div
      className={`h-screen bg-black/40 w-full fixed inset-0 z-[100] cursor-auto p-5 transition-slow flex items-center justify-center  ${
        show
          ? "pointer-events-auto translate-x-0"
          : "pointer-events-none translate-x-full"
      }`}
      role="modal"
      data-open={show}
      onClick={() => setShow(false)}
    >
      <Image src={image} alt="certificate" className="w-full max-w-3xl" />
    </div>
  );
};

export default CertificateOverlay;
