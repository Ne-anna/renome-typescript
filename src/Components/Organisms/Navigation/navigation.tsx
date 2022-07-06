import "../Navigation/navigation.scss";
import { NavigationData, Cart, MenuData, backButtonData } from "../../../data";
import Haburger from "../../Attoms/Hamburger-button/hamburger";
import CartDropDown from "../../Molecules/cart-drop-down/cart-drop-down";
import Menu from "../../Molecules/menu/menu";
import SubMenu from "../../Molecules/sub-menu/sub-menu";
import { useRef, useState } from "react";

const Navigation = (
  props: NavigationData & Cart & MenuData & backButtonData
) => {
  const [isCartOpen, setCartOpen] = useState(false);
  const [isMainMenuOpen, setMainMenuOpen] = useState(false);
  const [isSubMenuOpen, setSubMenuOpen] = useState(false);

  const Ref = useRef<HTMLDivElement>(null);

  const toggleCart = () => {
    setMainMenuOpen(false);
    setCartOpen(!isCartOpen);
    setSubMenuOpen(false);
  };

  const toggleMenu = () => {
    setMainMenuOpen(!isMainMenuOpen);
    setCartOpen(false);
    if (isSubMenuOpen) {
      setMainMenuOpen(false);
      setSubMenuOpen(false);
    }
  };

  const openSubMenu = () => {
    setSubMenuOpen(true);
    setMainMenuOpen(false);
  };

  const closeSubMenu = () => {
    setSubMenuOpen(false);
    setMainMenuOpen(true);
  };

  if (isMainMenuOpen || isSubMenuOpen || isCartOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "unset";
  }

  return (
    <nav>
      <h2 className="navigation--left">{props.logo}</h2>
      <div className="navigation--right" ref={Ref}>
        <img
          className="navigation__cart"
          src={props.cartPath}
          alt={props.altTagCart}
          onClick={toggleCart}
        />
        <p className="navigation__count">{props.count}</p>
        <img
          className="navigation__divide"
          src={props.dividerPath}
          alt={props.altTagDivider}
        />
        <div
          className={`navigation__hamburger${
            isMainMenuOpen ? " active" : isSubMenuOpen ? " active" : ""
          }`}
          onClick={toggleMenu}
        >
          <Haburger />
        </div>
        {isCartOpen && <CartDropDown cart={props.cart} />}
        {isMainMenuOpen && <Menu menu={props.menu} openSubMenu={openSubMenu} />}
        {isSubMenuOpen && (
          <SubMenu
            menu={props.menu}
            closeSubMenu={closeSubMenu}
            title={props.buttonData.title}
            buttonBackPath={props.buttonData.buttonBackPath}
            buttonBackAltTag={props.buttonData.buttonBackAltTag}
          />
        )}
      </div>
    </nav>
  );
};

export default Navigation;
