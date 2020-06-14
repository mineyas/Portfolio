import React from 'react';
import { Link } from 'react-scroll'

function NavItem (props){
    return (
     <li>
            <Link 
                activeClass="active" 
                className="nav-link" 
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
