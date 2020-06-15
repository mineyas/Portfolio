import React from 'react';
import { Link } from 'react-scroll'

import "./navbar.css";

function NavItem (props){
    return (
     <li className="nav-link">
            <Link 
                activeClass="active" 
                to={props.to} 
                spy={true} 
                smooth={true} 
                duration={500}>
                {props.title}
            </Link>
        </li>
    );
}

export default NavItem;
