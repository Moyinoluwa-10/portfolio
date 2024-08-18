import Link from "next/link";
import { FiGithub, FiTwitter } from "react-icons/fi";
import { AiOutlineLinkedin } from "react-icons/ai";

const links = [
  { name: "About", path: "/#about" },
  { name: "Projects", path: "/#projects" },
  { name: "Activities", path: "/activities" },
  { name: "Contact", path: "/contact" },
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
      <Link href="https://github.com/Moyinoluwa-10" target="_blank">
        <FiGithub />
      </Link>
      <Link href="https://twitter.com/MoyinAdelowo" target="_blank">
        <FiTwitter />
      </Link>
      <Link
        href="https://www.linkedin.com/in/moyinoluwa-adelowo/"
        target="_blank"
      >
        <AiOutlineLinkedin />
      </Link>
    </div>
  );
};

const MobileSocialLinks = () => {
  return (
    <div className="flex md:hidden items-center gap-9 text-2xl">
      <Link href="https://github.com/Moyinoluwa-10" target="_blank">
        <FiGithub />
      </Link>
      <Link href="https://twitter.com/MoyinAdelowo" target="_blank">
        <FiTwitter />
      </Link>
      <Link
        href="https://www.linkedin.com/in/moyinoluwa-adelowo/"
        target="_blank"
      >
        <AiOutlineLinkedin />
      </Link>
    </div>
  );
};

export const MobileNav = ({ onToggle }: { onToggle: () => void }) => {
  return (
    <div className="flex flex-col items-center gap-16 font-medium">
      {links.map(({ name, path }, index) => (
        <Link key={index} href={path} onClick={onToggle}>
          {name}
        </Link>
      ))}
      <MobileSocialLinks />
    </div>
  );
};
