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
  return (
    <div
      id="navMenu"
      aria-label="Navigation Menu"
      //   role="dialog"
      data-navMenuOpen={openMenu}
      className={`absolute inset-0 z-10 w-full bg-white py-6 transition-transform duration-300 lg:hidden ${openMenu ? "translate-x-0" : "translate-x-full"}`}
    >
      <div className="w-90 mx-auto mb-6 flex items-center justify-between">
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
      <nav
        aria-hidden={openMenu ? false : true}
        className="w-90 mx-auto flex flex-col gap-2"
      >
        {navLinks.map(({ name, path }) => (
          <a
            tabIndex={openMenu ? 0 : -1}
            onClick={toggleNavMenuState}
            href={path}
            className="inline-block py-2 font-semibold lg:text-xl"
          >
            {name}
          </a>
        ))}
      </nav>
      <div className="w-90 mx-auto mt-4 space-y-4">
        <Link
          onClick={toggleNavMenuState}
          tabIndex={openMenu ? 0 : -1}
          label="Login"
          href="#"
          hasIcon
          variant="primary"
        />
        <Link
          onClick={toggleNavMenuState}
          tabIndex={openMenu ? 0 : -1}
          label="Sign up"
          href="#"
          variant="ghost"
        />
      </div>
    </div>
  );
};

export default NavMenu;
