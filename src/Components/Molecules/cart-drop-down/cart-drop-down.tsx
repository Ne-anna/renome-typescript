import "../cart-drop-down/cart-drop-down.scss";
import { Cart } from "../../../data";

const CartDropDown = (props: Cart) => {
  return (
    <div className="cart">
      {props.cart.map((post, index) => {
        return (
          <div className="cart__item" key={index}>
            <p className="cart__text">{post.item}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CartDropDown;
