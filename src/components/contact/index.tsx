import { Button } from "@/ui";
import Link from "next/link";
import { FiGithub, FiMail, FiPhone, FiTwitter } from "react-icons/fi";
import { AiOutlineLinkedin } from "react-icons/ai";
import ContactForm from "./form";
import contactImage from "@/assets/images/contact/contact.png";
import contactBannerLight from "@/assets/images/contact/contact-banner-light.png";
import contactBannerDark from "@/assets/images/contact/contact-banner-dark.png";
import Image from "next/image";

const Contact = () => {
  return (
    <>
      <div className="px-5 py-16">
        <div className="container grid lg:grid-cols-2 gap-10 font-semibold text-black dark:text-primary-100">
          <div>
            <div className="pb-6 border-b-[3px] border-accent-1 dark:border-alt-4 mb-8">
              <h3 className="mb-4 text-2xl text-[#131313] dark:text-white ">
                Get in touch
              </h3>
              <p className="mb-6 text-black dark:text-primary-100">
                I would love to hear from you, let me build for you
              </p>
              <div className="flex items-center justify-between gap-x-10 gap-y-5 flex-wrap">
                <Button variant="secondary">Schedule a call</Button>
                <div className="flex items-center gap-8 text-2xl">
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
              </div>
            </div>
            <ContactForm />
          </div>
          <div>
            <Image
              src={contactImage}
              alt="contact image"
              className="mb-8 hidden lg:block"
            />
            <div>
              <div className="flex items-center gap-4 mb-5">
                <FiMail />
                <Link href="mailto:moyinadelowo@gmail.com">
                  moyinadelowo@gmail.com
                </Link>
              </div>
              <div className="flex items-center gap-4">
                <FiPhone />
                <Link href="tel:+12197073354">+1 219 707 3354</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Image
          src={contactBannerLight}
          alt="contact banner"
          className="w-full hidden md:block dark:md:hidden lg:hidden"
        />
        <Image
          src={contactBannerDark}
          alt="contact banner"
          className="w-full hidden dark:md:block lg:hidden"
        />
      </div>
    </>
  );
};

export default Contact;
