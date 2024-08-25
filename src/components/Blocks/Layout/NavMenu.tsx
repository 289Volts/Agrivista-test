import Link from "../../Atoms/Link";
import Close from "../../Atoms/SVGIcons/Close";

type TNavMenuProps = {
  openMenu: boolean;
  toggleNavMenuState: () => void;
};

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/#about" },
  { name: "Pages", path: "/#services" },
];
const NavMenu = ({ openMenu, toggleNavMenuState }: TNavMenuProps) => {
  const screenWidth = window.innerWidth;

  // useEffect(() => {
  //   const handleResize = () => setScreenWidth(window.innerWidth);
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  return (
    <div
      id="navMenu"
      aria-label="Navigation Menu"
      //   role="dialog"
      data-navmenuopen={openMenu}
      className={`absolute inset-0 z-10 w-full transition-transform duration-300 md:flex lg:relative lg:w-auto lg:translate-x-0 ${openMenu ? "translate-x-0" : "translate-x-full"}`}
    >
      <div
        onClick={toggleNavMenuState}
        className="hidden w-[45%] bg-black/45 md:block lg:hidden"
      />
      <div className="mx-auto h-full bg-white px-[5%] py-6 md:flex-1 lg:bg-transparent lg:p-0">
        <div className="mb-6 flex items-center justify-between lg:hidden">
          <a
            onClick={toggleNavMenuState}
            tabIndex={openMenu ? 0 : -1}
            href="/"
            className="text-xl font-bold md:text-[1.75rem]"
          >
            Agrivista Farms
          </a>
          <button
            tabIndex={openMenu ? 0 : -1}
            onClick={toggleNavMenuState}
            className="aspect-square h-6"
            aria-label="Close Menu"
            aria-controls="navMenu"
          >
            <Close className="h-full w-full" />
          </button>
        </div>
        <div className="flex flex-col gap-5 lg:flex-row lg:gap-10 xl:gap-[119px]">
          <nav
            aria-hidden={openMenu ? false : true}
            className="items-center gap-4 space-y-2 lg:flex lg:gap-10 lg:space-y-0 xl:gap-[4.1875rem]"
          >
            {navLinks.map(({ name, path }) => (
              <a
                key={name}
                tabIndex={openMenu || screenWidth > 1024 ? 0 : -1}
                onClick={toggleNavMenuState}
                href={path}
                className="block py-3 text-lg font-semibold md:text-xl"
              >
                {name}
              </a>
            ))}
          </nav>
          <div className="flex flex-col gap-4 lg:flex-row xl:gap-10">
            <Link
              onClick={toggleNavMenuState}
              tabIndex={openMenu || screenWidth > 1024 ? 0 : -1}
              label="Login"
              href="#"
              hasIcon
              variant="primary"
            />
            <Link
              onClick={toggleNavMenuState}
              tabIndex={openMenu || screenWidth > 1024 ? 0 : -1}
              label="Sign up"
              href="#"
              variant="ghost"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
