import Link from "next/link";
import MobileNav from "./MobileNav";
import { useEffect } from "react";
import { useBoolean } from "@/hooks/useBoolean";
import MenuButton from "./MenuButton";
import { headerData } from "@/constants";
import { useRouter } from "next/router";
import Image from "next/image";
import ovamannLogo from "../../../../public/ovamann-logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useBoolean(false);
  const [blurBg, setBlurBg] = useBoolean(false);
  const { navItems } = headerData;
  const { asPath } = useRouter();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 800) {
        setBlurBg.on();
      } else {
        setBlurBg.off();
      }
    });
  }, [setBlurBg]);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 border-y-slate-300 border-y-2 md:border-t-0 md:py-1 bg-white ${
        blurBg ? "shadow-sm" : "shadow-none"
      }
    ${blurBg ? "bg-opacity-80" : "bg-opacity-100"} backdrop-blur-lg`}
    >
      <div className="relative z-[80] mx-auto max-w-[89rem] px-4 sm:px-5 md:px-7">
        <div className=" relative flex items-center justify-between text-base font-semibold leading-6 text-paragraph py-2 md:py-0">
          <Link href="/" className="">
            <Image
              src={ovamannLogo}
              alt="logo"
              width={130}
              height={47}
              priority
              onClick={() => setIsOpen.off()}
            />
          </Link>

          <div className="flex items-center">
            {/* <!-- MenuBtn start --> */}
            <div className="md:hidden">
              <MenuButton isOpen={isOpen} onClick={setIsOpen.toggle} />
            </div>
            {/* <!-- MenuBtn ends --> */}

            {/* <!---------------------> */}
            {/* <!-- Nav menu starts --> */}
            {/* <!---------------------> */}
            <div className="hidden items-center md:flex ">
              <nav>
                <ul className="flex items-center text-base  py-3 md:space-x-1 lg:space-x-2">
                  <>
                    {/*----Nav Links -----*/}
                    {navItems.map((item, index) => (
                      <li key={index} className=" px-4 py-2 ">
                        <Link
                          href={item.link}
                          className={`${
                            asPath.includes(item.link)
                              ? "text-primary"
                              : "text-black"
                          } capitalize hover:text-primary font-semibold transition-all duration-150 ease-in-out`}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </>
                </ul>
              </nav>
              {/* <!-- Nav menu ends --> */}
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Mobile nav starts --> */}
      {isOpen && <MobileNav onClose={setIsOpen.toggle} />}
      {/* <!-- Mobile nav ends --> */}
      {/* <!---------------------> */}
      {/* <!-- Nav menu ends --> */}
      {/* <!---------------------> */}
    </header>
  );
};

export default Header;
