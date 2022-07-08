import "./navigation.scss";
import { NavigationData, Cart, MenuData, backButtonData } from "../../../data";
import Hamburger from "../../atoms/hamburger-button/hamburger";
import CartDropDown from "../../molecules/cart-drop-down/cart-drop-down";
import Menu from "../../molecules/menu/menu";
import SubMenu from "../../molecules/sub-menu/sub-menu";
import { useRef, useState, useEffect } from "react";

interface NavigationProps {
  navigationData: NavigationData;
  cartData: Cart;
  menuData: MenuData;
  backButtonData: backButtonData;
}

const Navigation = (props: NavigationProps) => {
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
      <h2 className="navigation--left">{props.navigationData.logo}</h2>
      <div className="navigation--right" ref={Ref}>
        <img
          className="navigation__cart"
          src={props.navigationData.cartPath}
          alt={props.navigationData.altTagCart}
          onClick={toggleCart}
        />
        <p className="navigation__count">{props.navigationData.count}</p>
        <img
          className="navigation__divide"
          src={props.navigationData.dividerPath}
          alt={props.navigationData.altTagDivider}
        />
        <div
          className={`navigation__hamburger${
            isMainMenuOpen ? " active" : isSubMenuOpen ? " active" : ""
          }`}
          onClick={toggleMenu}
        >
          <Hamburger />
        </div>
        {isCartOpen && <CartDropDown cart={props.cartData.cart} />}
        {isMainMenuOpen && (
          <Menu menu={props.menuData.menu} openSubMenu={openSubMenu} />
        )}
        {isSubMenuOpen && (
          <SubMenu
            backButton={{
              buttonBackAltTag:
                props.backButtonData.buttonData.buttonBackAltTag,
              buttonBackPath: props.backButtonData.buttonData.buttonBackPath,
              title: props.backButtonData.buttonData.title,
            }}
            menuData={{
              menu: props.menuData.menu,
              closeSubMenu: closeSubMenu,
              openSubMenu: openSubMenu,
            }}
          />
        )}
      </div>
    </nav>
  );
};

export default Navigation;
