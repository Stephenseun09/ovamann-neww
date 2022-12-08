import Link from "next/link";
import { FacebookIcon, InstagramIcon, LinkedInIcon } from "./custom-icons";

const icons = [
  {
    Icon: FacebookIcon,
    href: "https://www.facebook.com/Ovamannpumpslimited",
  },

  {
    Icon: InstagramIcon,
    href: "https://www.instagram.com/ovamannpumpsltd/",
    name: "Instagram",
  },
  {
    Icon: LinkedInIcon,
    href: "https://www.linkedin.com/company/ovamannpumpsltd/",
    name: "LinkedIn",
  },
];

const SocialMedia = () => {
  return (
    <>
      {icons.map((icon, index) => (
        <div
          key={index}
          className="rounded-2xl bg-white bg-opacity-10 p-2.5 hover:-translate-y-2 
         transition duration-300 ease-in-out
         "
        >
          <Link href={icon.href}>
            <icon.Icon
              className={` block 
                  w-6 h-6`}
            />
            <span className="sr-only">{icon.name}</span>
          </Link>
        </div>
      ))}
    </>
  );
};

export default SocialMedia;
