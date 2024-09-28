import Link from "next/link";
import { Logo } from "@/ui";

interface LinksProps {
  data: Array<{
    name: string;
    path: string;
  }>;
}

const Links = ({ data }: LinksProps) => {
  return (
    <nav className="flex items-center justify-center gap-x-16 gap-y-5 flex-wrap">
      {data.map(({ name, path }, index) => (
        <span key={index}>
          <Link href={path}>{name}</Link>
        </span>
      ))}
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-alt-4 p-5 text-black dark:text-primary-100">
      <div className="container text-xs font-medium">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          <Link href="/">
            <Logo />
          </Link>
          <Links
            data={[
              { name: "Projects", path: "/projects" },
              { name: "Activities", path: "/activities" },
            ]}
          />
        </div>
        <p className="text-center">
          &copy; {new Date().getFullYear()}. Developed by Moyin, Designed by
          @belikeoscar
        </p>
      </div>
    </footer>
  );
};

export default Footer;
