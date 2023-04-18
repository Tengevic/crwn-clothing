import {Outlet, Link} from "react-router-dom";
import { Fragment, useContext } from "react";
import "./navigation.styles.scss"
import { UserContext } from "../../context/user.context";
import { ReactComponent as Crwnlog } from "../../assets/crown.svg";
import { signAuthuser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../Components/cart-icon/cart-icon.component";
import CartDropdown from "../../Components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../context/cart.context";

const Navigation = () =>{
    const {currentUser} = useContext(UserContext)
    const {isCartOpen} = useContext(CartContext)
    const signOuthandler = async () => {
        await signAuthuser();
    }
    return (<Fragment>
                <div className="navigation">
                    <Link className="logo-conatiner" to='/'>
                     <Crwnlog/>
                    </Link>
                    
                    <div className="nav-links-container">
                        <Link className="nav-link" to="/Shop">Shop</Link>
                        {currentUser ?
                             (<span className="nav-link" onClick={signOuthandler}>Sign Out</span>):
                             (<Link className="nav-link" to="/Authentication">Sign In</Link>)
                        }
                          <CartIcon/>
                    </div>      
                   { isCartOpen && <CartDropdown/> }         
                </div>
                <Outlet/>
            </Fragment>)
  }
  export default Navigation;