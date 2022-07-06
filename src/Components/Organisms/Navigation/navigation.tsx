import "../Navigation/navigation.scss";
import { NavigationData, Cart } from "../../../data";
import Haburger from "../../Attoms/Hamburger-button/hamburger";
import CartDropDown from "../../Molecules/cart-drop-down/cart-drop-down";
import { useRef, useState } from "react";

const Navigation = (props: NavigationData & Cart) => {
  const [isCartOpen, setCartOpen] = useState(false);
  const [isMainMenuOpen, setMainMenuOpen] = useState(false);

  const Ref = useRef<HTMLDivElement>(null);

  const toggleCart = () => {
    setMainMenuOpen(false);
    setCartOpen(!isCartOpen);
  };

  const toggleMenu = () => {
    setMainMenuOpen(!isMainMenuOpen);
    setCartOpen(false);
  };

  if (isMainMenuOpen || isCartOpen) {
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
          className={`navigation__hamburger${isMainMenuOpen ? " active" : ""}`}
          onClick={toggleMenu}
        >
          <Haburger />
        </div>
        {isCartOpen && <CartDropDown cart={props.cart} />}
      </div>
    </nav>
  );
};

export default Navigation;
