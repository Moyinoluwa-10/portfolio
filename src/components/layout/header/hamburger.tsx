interface HamburgerProps {
  menuIsOpen: boolean;
  onToggle: () => void;
}

export default function Hamburger({ menuIsOpen, onToggle }: HamburgerProps) {
  return (
    <div
      className={`hamburger cursor-pointer relative z-50 lg:hidden ${
        menuIsOpen ? "active" : ""
      }`}
      onClick={onToggle}
    >
      <span className="bar block w-5 h-[2px] mb-[6px] bg-black dark:bg-primary-100 rounded-3xl"></span>
      <span className="bar block w-8 h-[2px] mb-[6px] bg-black dark:bg-primary-100 rounded-3xl"></span>
      <span className="bar block w-5 h-[2px] ml-auto bg-black dark:bg-primary-100 rounded-3xl"></span>
    </div>
  );
}
