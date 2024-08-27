const Star = ({ className }: { className?: string }) => {
  return (
    <svg
      width="54"
      height="54"
      className={className}
      viewBox="0 0 54 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M35.1 19.3333L30.2 3.19995C29.2333 0.0332845 24.7667 0.0332845 23.8333 3.19995L18.9 19.3333H4.06666C0.83333 19.3333 -0.500003 23.5 2.13333 25.3666L14.2667 34.0333L9.5 49.4C8.53333 52.5 12.1333 55 14.7 53.0333L27 43.6999L39.3 53.0666C41.8667 55.0333 45.4667 52.5333 44.5 49.4333L39.7333 34.0666L51.8667 25.4C54.5 23.5 53.1667 19.3666 49.9333 19.3666H35.1V19.3333Z"
        fill="white"
      />
    </svg>
  );
};

export default Star;
