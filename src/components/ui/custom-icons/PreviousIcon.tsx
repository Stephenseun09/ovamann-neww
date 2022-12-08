const PreviousIcon = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
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
        d="M9.475 13.025C9.80833 13.2417 10.146 13.254 10.488 13.062C10.8293 12.8707 11 12.575 11 12.175V1.82499C11 1.42499 10.8293 1.12899 10.488 0.936989C10.146 0.745655 9.80833 0.758322 9.475 0.974989L1.325 6.14999C1.025 6.34999 0.875 6.63332 0.875 6.99999C0.875 7.36666 1.025 7.64999 1.325 7.84999L9.475 13.025Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default PreviousIcon;
