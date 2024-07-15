"use client";
import { useState } from "react";
import { Logo } from "@/ui";
import { DesktopNav, DesktopSocialLinks, MobileNav } from "./nav-links";
import Hamburger from "./hamburger";
import ThemeSwitcher from "./switch";

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const handleToggleMenu = () => setMenuIsOpen((curr) => !curr);

  return (
    <header className="bg-[#E3EAEA] px-5 py-4">
      <div className="container flex items-center justify-between">
        <Logo />
        <DesktopNav />
        <div className="flex items-center gap-20">
          <DesktopSocialLinks />
          <div className="flex items-center gap-10">
            <ThemeSwitcher />
            <Hamburger menuIsOpen={menuIsOpen} onToggle={handleToggleMenu} />
          </div>
        </div>
      </div>
      <section
        className={`fixed w-full h-screen top-0 bg-[#f2f2f2] transition-all duration-500 ease-in-out z-40 flex items-center justify-center p-5 ${
          menuIsOpen ? "left-0" : "left-[100%]"
        }`}
        role="modal"
        data-open={menuIsOpen}
      >
        <MobileNav />
      </section>
    </header>
  );
};

export default Header;
