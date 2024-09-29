import { IoClose } from "react-icons/io5";

interface ActivityOverlayProps {
  title: string;
  description?: string[];
  show: boolean;
  onClose: () => void;
}

export default function ActivityOverlay({
  title,
  description,
  show,
  onClose,
}: ActivityOverlayProps) {
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
        <div
          className={`w-full relative z-[60] container bg-dark text-white dark:bg-primary-100 dark:text-black px-5 py-10 rounded-xl transition-all duration-500 ease-in-out delay-100 shadow-[0_5px_15px_0px_rgba(255,255,255,0.2)] ${
            show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          <h2 className="font-semibold text-2xl mb-5 pr-10">{title}</h2>
          <p>
            {description?.map((desc, index) => (
              <>
                <span key={index} className="">
                  {desc}
                </span>{" "}
                <br />
                <br />
              </>
            ))}
          </p>
          <span
            className="cursor-pointer absolute top-5 right-5 text-2xl"
            onClick={onClose}
          >
            <IoClose />
          </span>
        </div>
      </div>
    </section>
  );
}
