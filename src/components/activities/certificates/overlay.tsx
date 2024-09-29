import Image, { StaticImageData } from "next/image";

interface CertificateOverlayProps {
  image: StaticImageData;
  show: boolean;
  onClose: () => void;
}

export default function CertificateOverlay({
  image,
  show,
  onClose,
}: CertificateOverlayProps) {
  return (
    <section
      className={`fixed left-0 top-0 h-screen w-full overflow-hidden z-50 cursor-auto transition-[opacity] duration-500 ease-in-out ${
        show ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      }`}
      role="modal"
      data-open={show}
    >
      <div
        className="fixed top-0 left-0 h-screen w-full bg-black/70 z-[55]"
        onClick={onClose}
      ></div>
      <div className="w-full h-full px-5 py-10 overflow-y-auto grid items-center justify-center">
        <Image
          src={image}
          alt="certificate"
          className={`w-full max-w-3xl relative z-[60] transition-all duration-500 ease-in-out delay-100 shadow-[0_5px_15px_0px_rgba(255,255,255,0.2)] ${
            show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        />
      </div>
    </section>
  );
}
