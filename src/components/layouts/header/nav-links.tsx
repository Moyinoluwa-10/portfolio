import Link from "next/link";
import { FiGithub, FiTwitter } from "react-icons/fi";
import { AiOutlineLinkedin } from "react-icons/ai";

interface MobileNavProps {
  onClick: () => void;
}

const links = [
  { name: "About", path: "#about" },
  { name: "Projects", path: "#" },
  { name: "Activities", path: "#" },
  { name: "Contact", path: "#" },
];

export const DesktopNav = () => {
  return (
    <nav className="font-semibold hidden lg:flex items-center gap-11">
      {links.map(({ name, path }, index) => (
        <Link key={index} href={path}>
          {name}
        </Link>
      ))}
    </nav>
  );
};

export const DesktopSocialLinks = () => {
  return (
    <div className="hidden md:flex items-center gap-9 text-2xl">
      <Link href="" target="_blank">
        <FiGithub />
      </Link>
      <Link href="" target="_blank">
        <FiTwitter />
      </Link>
      <Link href="" target="_blank">
        <AiOutlineLinkedin />
      </Link>
    </div>
  );
};

const MobileSocialLinks = () => {
  return (
    <div className="flex md:hidden items-center gap-9 text-2xl">
      <Link href="" target="_blank">
        <FiGithub />
      </Link>
      <Link href="" target="_blank">
        <FiTwitter />
      </Link>
      <Link href="" target="_blank">
        <AiOutlineLinkedin />
      </Link>
    </div>
  );
};

export const MobileNav = () => {
  return (
    <div className="flex flex-col items-center gap-16 font-medium">
      {links.map(({ name, path }, index) => (
        <Link key={index} href={path}>
          {name}
        </Link>
      ))}
      <MobileSocialLinks />
    </div>
  );
};
