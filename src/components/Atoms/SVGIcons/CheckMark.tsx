const CheckMark = ({ className }: { className?: string }) => {
  return (
    <svg
      width="57"
      height="42"
      className={className}
      viewBox="0 0 57 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 33.8999L6.43333 22.3332C5.13333 21.0332 3.03333 21.0332 1.73333 22.3332C0.433331 23.6332 0.433331 25.7332 1.73333 27.0332L15.6667 40.9666C16.9667 42.2666 19.0667 42.2666 20.3667 40.9666L55.6333 5.6999C56.9333 4.3999 56.9333 2.2999 55.6333 0.999902C54.3333 -0.300098 52.2333 -0.300098 50.9333 0.999902L18 33.8999Z"
        fill="white"
      />
    </svg>
  );
};

export default CheckMark;
