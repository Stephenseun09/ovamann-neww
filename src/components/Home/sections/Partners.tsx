import Image from "next/image";
import Marquee from "react-fast-marquee";
import partner1 from "../../../../public/images/partners/partner1.png";
import partner2 from "../../../../public/images/partners/partner2.jpg";
import partner3 from "../../../../public/images/partners/partner3.png";
import partner4 from "../../../../public/images/partners/partner4.jpg";
import partner5 from "../../../../public/images/partners/partner5.png";
import partner6 from "../../../../public/images/partners/partner6.jpg";

const partners = [
  {
    id: 1,
    image: partner1,
    alt: "partner1",
  },
  {
    id: 2,
    image: partner2,
    alt: "partner2",
  },
  {
    id: 3,
    image: partner3,
    alt: "partner3",
  },
  {
    id: 4,
    image: partner4,
    alt: "partner4",
  },
  {
    id: 5,
    image: partner5,
    alt: "partner5",
  },
  {
    id: 6,
    image: partner6,

    alt: "partner6",
  },
];

const Partners = () => {
  return (
    <div className=" mt-8 md:mt-10 md:mb-4">
      <Marquee
        pauseOnHover
        speed={30}
        style={{ maxWidth: "1200px", marginInline: "auto" }}
        // gradient={false}
      >
        {partners.map((logo, index) => (
          <Image
            src={logo.image}
            width={120}
            height={32}
            alt="partner"
            className="mx-5 md:mx-7 lg:mx-10"
            key={index}
          />
        ))}
      </Marquee>
    </div>
  );
};

export default Partners;
