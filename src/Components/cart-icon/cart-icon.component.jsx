import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../context/cart.context";
import "./cart-icon.styles.scss"
import { useContext } from "react";

const CartIcon = () => {
    const {isCartOpen, setIscartOpen,cartCount} = useContext(CartContext);

    const toggleIscartOpen = () =>setIscartOpen(!isCartOpen);

 return(<div className="cart-icon-container" onClick={toggleIscartOpen}>
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count">{cartCount}</span>
 </div> )
}
export default CartIcon;