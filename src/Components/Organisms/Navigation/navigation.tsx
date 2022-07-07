import "./navigation.scss";
import { NavigationData, Cart, MenuData, backButtonData } from "../../../data";
import Hamburger from "../../atoms/hamburger-button/hamburger";
import CartDropDown from "../../molecules/cart-drop-down/cart-drop-down";
import Menu from "../../molecules/menu/menu";
import SubMenu from "../../molecules/sub-menu/sub-menu";
import { useRef, useState, useEffect } from "react";

const Navigation = (
  props: NavigationData & Cart & MenuData & backButtonData
) => {
  const [isCartOpen, setCartOpen] = useState<boolean>(false);
  const [isMainMenuOpen, setMainMenuOpen] = useState<boolean>(false);
  const [isSubMenuOpen, setSubMenuOpen] = useState<boolean>(false);

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

  useEffect(() => {
    const closeWithOutsideClick = (e: Event) => {
      if (!Ref.current?.contains(e.target as HTMLInputElement)) {
        setCartOpen(false);
      }
      if (!Ref.current?.contains(e.target as HTMLInputElement)) {
        setMainMenuOpen(false);
        setSubMenuOpen(false);
      }
    };
    document.body.addEventListener("mousedown", closeWithOutsideClick);
  }, [Ref]);

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
          <Hamburger />
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
