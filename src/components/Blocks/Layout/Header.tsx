import { useState } from "react";
import MenuIcon from "../../Atoms/SVGIcons/MenuIcon";
import NavMenu from "./NavMenu";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleNavMenuState = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <header className="">
      <div className="w-90 mx-auto flex items-center justify-between py-6">
        <a href="/" className="text-xl font-bold md:text-[1.75rem]">
          Agrivista Farms
        </a>
        <NavMenu openMenu={openMenu} toggleNavMenuState={toggleNavMenuState} />
        {/* Mobile menu icon */}
        <button
          aria-controls="navMenu"
          onClick={toggleNavMenuState}
          className="aspect-square h-6 lg:hidden"
        >
          <MenuIcon className="h-full w-full" />
        </button>
      </div>
    </header>
  );
};

export default Header;
