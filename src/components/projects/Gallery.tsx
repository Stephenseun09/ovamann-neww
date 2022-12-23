import { useBoolean } from "@/hooks/useBoolean";
import Image from "next/image";
import { useState } from "react";
import { ArrowRightIcon, CloseIcon } from "../ui/custom-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import useSwiperRef from "@/hooks/useSwiperRef";

const Gallery = ({ gallery, title }: { gallery: any; title: string }) => {
  const [showModal, setShowModal] = useBoolean(false);
  const [modalContent, setModalContent] = useState<any>(null);
  const [nextEl, nextElRef] = useSwiperRef<HTMLButtonElement>();
  const [prevEl, prevElRef] = useSwiperRef<HTMLButtonElement>();

  const pagination = {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + " " + "</span>";
    },
  };

  const breakpoints = {
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  };

  return (
    <div className=" space-y-2 md:space-y-4 overflow-x-hidden md:pt-4">
      <h2 className="font-semibold text-lg md:text-2xl lg:text-3xl uppercase">
        Gallery
      </h2>

      {/* <p className="max-w-7xl md:text-lg">
              Enjoy some images of the project.
            </p> */}

      <div className="relative pt-4">
        <Swiper
          spaceBetween={30}
          pagination={pagination}
          modules={[Pagination, Navigation]}
          breakpoints={breakpoints}
          navigation={{
            prevEl,
            nextEl,
          }}
          className="swiper"
        >
          {/*---------------------------*/}
          {/*---- Navigation Button ----*/}
          {/*---------------------------*/}
          <div className="absolute -top-20 z-50  items-end space-x-6 right-0 hidden md:flex md:justify-end">
            <button ref={prevElRef} className=" bg-primary-blue rounded-lg p-2">
              <ArrowRightIcon className="w-4 h-4 text-white" />
            </button>
            <button ref={nextElRef} className=" bg-primary-blue rounded-lg p-2">
              <ArrowRightIcon className="rotate-180 w-4 h-4 text-white" />
            </button>
          </div>
          {/*---------------------------*/}
          {/*---- Navigation Button ----*/}
          {/*---------------------------*/}

          {/*-------------------*/}
          {/*---- Card Item ----*/}
          {/*-------------------*/}
          {gallery?.map((item: any, index: any) => (
            <SwiperSlide key={index}>
              <Image
                key={index}
                className="h-[250px] rounded-lg w-full bg-[#D9D9D9] shadow-lg cursor-pointer"
                alt={`gallery image ${index}`}
                src={item.url}
                width={400}
                height={300}
                onClick={() => {
                  setShowModal.on();
                  setModalContent(item);
                }}
                style={{
                  WebkitTapHighlightColor: "transparent",
                }}
              />
            </SwiperSlide>
          ))}
          <div className="swiper-pagination" />
        </Swiper>
      </div>

      {showModal && (
        <Modal
          src={modalContent.url}
          title={title}
          onClose={() => {
            setShowModal.off();
            setModalContent(null);
          }}
        />
      )}
    </div>
  );
};

export default Gallery;

const Modal = ({
  src,
  title,
  onClose,
}: {
  src: string;
  title: string;
  onClose: () => void;
}) => {
  return (
    <>
      <div
        className="fixed top-0 left-0 w-full h-screen z-[100] bg-[#000000dc]"
        onClick={onClose}
      />
      <div
        className="flex flex-col w-[90%] max-w-3xl mx-auto max-h-[75vh] lg:max-h-[60vh] rounded-lg z-[100]"
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className="relative">
          <button
            type="button"
            onClick={onClose}
            className="absolute -top-12 right-0 z-[200]"
          >
            <CloseIcon className=" w-6 h-6 text-white" />
          </button>
          <Image
            className="w-full h-full max-h-[80vh] object-cover rounded-lg shadow-xl bg-slate-300"
            width={1200}
            height={800}
            src={src}
            alt={title}
          />

          {/* <div className="bg-white px-4 py-3 rounded-b-lg">
            <p className="text-lg font-bold ">{title}</p>
          </div> */}
        </div>
      </div>
    </>
  );
};
