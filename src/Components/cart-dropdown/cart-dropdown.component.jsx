import "./cart-dropdown.styles.scss"
import { CartContext } from "../../context/cart.context";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const CartDropdown = () =>{
    const {cartItems,setIscartOpen, isCartOpen} = useContext(CartContext)
    const navigate = useNavigate();

    const toCheckout = () =>{
        navigate("/Checkout")
        setIscartOpen(!isCartOpen)
    }    

 return(
    <div className="cart-dropdown-container">
        <div className="cart-items">
         {cartItems.map(item => <CartItem key = {item.id} cartItem={item} />)}
        </div>
        <Button onClick={toCheckout}>Go To Checkout</Button>
    </div>
 )
}
export default CartDropdown;