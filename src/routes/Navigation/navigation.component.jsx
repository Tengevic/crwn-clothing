import {Outlet, Link} from "react-router-dom";
import { Fragment } from "react";
import "./navigation.styles.scss"

import { ReactComponent as Crwnlog } from "../../assets/crown.svg";

const Navigation = () =>{
    return (<Fragment>
                <div className="navigation">
                    <Link className="logo-conatiner" to='/'>
                     <Crwnlog/>
                    </Link>
                    
                    <div className="nav-links-container">
                        <Link className="nav-link" to="/Shop">Shop</Link>
                        <Link className="nav-link" to="/SignIn">Sign In</Link>
                    </div>
                </div>
                <Outlet/>
            </Fragment>)
  }
  export default Navigation;