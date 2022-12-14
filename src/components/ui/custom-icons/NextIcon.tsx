const NextIcon = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="11"
      height="14"
      className={className}
      viewBox="0 0 11 14"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.525 13.025C1.19167 13.2417 0.854 13.254 0.512 13.062C0.170667 12.8707 0 12.575 0 12.175V1.82499C0 1.42499 0.170667 1.12899 0.512 0.936989C0.854 0.745655 1.19167 0.758322 1.525 0.974989L9.675 6.14999C9.975 6.34999 10.125 6.63332 10.125 6.99999C10.125 7.36666 9.975 7.64999 9.675 7.84999L1.525 13.025Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default NextIcon;