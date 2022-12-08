import React from "react";

const QualityIcon = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M29.8972 4.47866C29.8398 4.06607 29.5429 3.72669 29.1416 3.61515L16.2803 0.0383966C16.0969 -0.0126361 15.9032 -0.0126361 15.7197 0.0383966L2.85839 3.61515C2.4571 3.72669 2.16025 4.06593 2.1028 4.47866C2.0282 5.01506 0.326416 17.689 4.69138 23.9939C9.05119 30.2913 15.4828 31.9051 15.7545 31.9708C15.8352 31.9903 15.9175 31.9999 16 31.9999C16.0825 31.9999 16.1648 31.9902 16.2455 31.9708C16.5173 31.9051 22.949 30.2913 27.3086 23.9939C31.6736 17.6891 29.9718 5.0152 29.8972 4.47866ZM24.2939 11.8778L15.5212 20.6506C15.3171 20.8547 15.0493 20.9569 14.7818 20.9569C14.5142 20.9569 14.2465 20.8548 14.0424 20.6506L8.61825 15.2265C8.42207 15.0304 8.31191 14.7644 8.31191 14.4871C8.31191 14.2097 8.42221 13.9437 8.61825 13.7476L9.69523 12.6707C10.1036 12.2624 10.7658 12.2623 11.1741 12.6707L14.7818 16.2784L21.7381 9.32188C21.9342 9.1257 22.2002 9.01555 22.4775 9.01555C22.7549 9.01555 23.0209 9.1257 23.2169 9.32188L24.2939 10.3989C24.7023 10.8073 24.7023 11.4694 24.2939 11.8778Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default QualityIcon;
