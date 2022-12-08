import { footerData } from "@/constants";
import Image from "next/image";
import ovamannLogo from "../../../../public/ovamann-logo.png";
import SocialMedia from "@/components/ui/SocialMedia";

const Left = () => {
  const { footerDescription } = footerData;
  return (
    <>
      <div className="mb-6">
        <div className=" mb-4 ">
          {/*-----------------------*/}
          {/*---- ovamann Logo ----*/}
          <Image
            src={ovamannLogo}
            alt="logo"
            width={140}
            height={47}
            placeholder="blur"
          />
        </div>
        {/* ---------------------- */}

        {/*---- Footer Description ----*/}
        <p className="text-base md:text-lg text-white max-w-[50ch]">
          {footerDescription}
        </p>
        {/* ---------------------- */}
      </div>

      {/*---- Social Media ----*/}
      <div className="flex gap-3 text-white">
        <SocialMedia />
        {/* ---------------------- */}
        {/* ---------------------- */}
      </div>
    </>
  );
};

export default Left;
