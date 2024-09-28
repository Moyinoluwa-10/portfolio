"use client";
import { usePathname, useRouter } from "next/navigation";
import { animatePageIn, animatePageOut } from "@/utils/animations";

interface Props {
  href: string;
  children?: React.ReactNode;
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const TransitionLink = ({ href, children }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = async () => {
    if (pathname !== href) {
      animatePageOut(href, router);
    }
    if (pathname === "/" && href === "/#about") {
      await sleep(2000);
      animatePageIn();
    }
  };

  return <button onClick={handleClick}>{children}</button>;
};

export default TransitionLink;
