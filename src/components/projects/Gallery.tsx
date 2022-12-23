import { useBoolean } from "@/hooks/useBoolean";
import Image from "next/image";
import { useState } from "react";
import { CloseIcon } from "../ui/custom-icons";

const Gallery = ({ gallery, title }: { gallery: any; title: string }) => {
  const [showModal, setShowModal] = useBoolean(false);
  const [modalContent, setModalContent] = useState<any>(null);
  return (
    <div className=" space-y-2 md:space-y-4 ">
      <h2 className="font-semibold text-lg md:text-2xl lg:text-3xl uppercase">
        Gallery
      </h2>

      {/* <p className="max-w-7xl md:text-lg">
              Enjoy some images of the project.
            </p> */}

      <div className="flex flex-col gap-6 md:flex-row flex-wrap ">
        {gallery?.map((item: any, index: any) => (
          <>
            <Image
              key={index}
              className="h-[250px] w-full md:w-[48%] lg:w-[32%] bg-[#D9D9D9] shadow-lg cursor-pointer"
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
          </>
        ))}
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
        className="fixed top-0 left-0 w-full h-screen z-[100] bg-[#000000bf]"
        onClick={onClose}
      />
      <div
        className="flex flex-col w-[90%] max-w-4xl mx-auto max-h-[75vh] lg:max-h-[60vh] rounded-lg z-[100] bg-white"
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <button type="button" onClick={onClose}>
          <CloseIcon className=" w-7 h-7 fixed -top-10 md:top-6 right-0 md:-right-10 z-[200] text-white" />
        </button>
        <Image
          className="w-full h-full object-cover rounded-t-lg bg-slate-300"
          width={1200}
          height={800}
          src={src}
          alt={title}
        />
        <div className="bg-white px-4 py-3 rounded-b-lg">
          <p className="text-lg font-bold ">{title}</p>
        </div>
      </div>
    </>
  );
};
