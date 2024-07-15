import Image from "next/image";
import logoLight from "@/assets/images/layout/logo-light.png";
import logoDark from "@/assets/images/layout/logo-dark.png";

export const Logo = () => {
  return (
    <div>
      <Image
        className="hidden dark:block w-28"
        src={logoLight}
        alt="dark-mode-logo"
      />
      <Image
        className="block dark:hidden w-28"
        src={logoDark}
        alt="light-mode-logo"
      />
    </div>
  );
};
