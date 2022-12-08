import React from "react";
export const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
  ref?.current?.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
};
