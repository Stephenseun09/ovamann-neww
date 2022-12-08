const LinkedInIcon = ({
  className,
  ...props
}: {
  className?: string;
  props?: any;
}) => {
  return (
    <svg
      width="21"
      height="18"
      fill="currentColor"
      className={`${className}  `}
      viewBox="0 0 21 18"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20.1976 2.37585C20.1976 6.59283 20.1976 10.8098 20.1976 15.0263C20.1815 15.073 20.157 15.1188 20.1514 15.1664C20.0396 16.1308 19.2084 16.9485 18.1353 17.1468C17.9969 17.1726 17.8579 17.198 17.7195 17.2233C12.9629 17.2233 8.20681 17.2233 3.45022 17.2233C3.34136 17.2042 3.23301 17.1851 3.12415 17.1655C1.84045 16.9298 0.987652 16.0072 0.98715 14.8436C0.985645 10.7498 0.986147 6.65552 0.989156 2.56171C0.989156 2.39674 1.00722 2.22867 1.04584 2.06727C1.31874 0.932985 2.35112 0.192657 3.65991 0.192213C8.19627 0.190879 12.7331 0.191321 17.2695 0.192655C17.4626 0.192655 17.6568 0.202883 17.8489 0.21889C18.9716 0.314043 19.8801 1.03925 20.1133 2.02191C20.1414 2.14019 20.1695 2.25802 20.1976 2.37585ZM11.2352 7.65063C11.2352 7.53013 11.2362 7.41008 11.2352 7.28958C11.2322 7.0099 11.0787 6.86628 10.7657 6.86406C10.2149 6.8605 9.66458 6.8605 9.11378 6.86406C8.80226 6.86628 8.65477 7.00189 8.65477 7.27402C8.65377 7.92319 8.65427 8.57193 8.65427 9.2211C8.65427 10.6969 8.65377 12.1722 8.65477 13.648C8.65477 13.8996 8.78972 14.0388 9.04556 14.0401C9.64 14.0432 10.2345 14.0464 10.8289 14.0357C10.9292 14.0339 11.0652 13.9863 11.1178 13.9192C11.1901 13.8271 11.2282 13.696 11.2292 13.5813C11.2372 12.4719 11.2277 11.3625 11.2377 10.2527C11.2412 9.84004 11.3737 9.45321 11.6686 9.12417C11.9782 8.77913 12.4051 8.6982 12.8671 8.75423C13.314 8.80847 13.6331 9.0388 13.7605 9.42297C13.8473 9.68486 13.906 9.96321 13.9115 10.2353C13.9301 11.1171 13.918 11.9992 13.918 12.8814C13.918 13.1366 13.913 13.3918 13.92 13.6471C13.9276 13.9125 14.0811 14.0406 14.379 14.041C14.9609 14.0419 15.5428 14.0419 16.1248 14.041C16.4328 14.0406 16.5697 13.9192 16.5697 13.6448C16.5697 12.3967 16.5848 11.1482 16.5592 9.90051C16.5501 9.46699 16.4809 9.02679 16.3675 8.60483C16.1533 7.8067 15.6617 7.18953 14.7407 6.91563C14.1357 6.73555 13.5157 6.72133 12.8902 6.80981C12.226 6.90318 11.6747 7.16819 11.2352 7.65063ZM4.97221 10.447C4.97221 11.5115 4.9707 12.5759 4.97321 13.6404C4.97371 13.9041 5.13023 14.0397 5.42519 14.0406C5.95693 14.0424 6.48817 14.0415 7.01992 14.041C7.40016 14.041 7.55367 13.9067 7.55367 13.5693C7.55417 11.4954 7.55417 9.42208 7.55367 7.34827C7.55367 7.01079 7.38662 6.86228 7.00487 6.86139C6.50473 6.86006 6.00409 6.86006 5.50395 6.86139C5.12571 6.86272 4.97221 6.99967 4.97221 7.33627C4.97171 8.37362 4.97171 9.41008 4.97221 10.447ZM6.27347 3.36117C5.34342 3.35939 4.6025 4.00101 4.59999 4.81026C4.59698 5.63329 5.33239 6.29803 6.25391 6.30514C7.14984 6.31226 7.92338 5.63284 7.92689 4.83649C7.9299 4.02591 7.18747 3.36295 6.27347 3.36117Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default LinkedInIcon;
