import React from 'react';
import NavItem from './navItem'


class Navbar extends React.Component {

    render() {
    return (
        <div>
        <div>aurelien gogol</div>
        <NavItem title="A Propos" to="apropos"/>
        <NavItem title="Compétences" to="competences"/>
        <NavItem title="Expériences" to="experiences"/>
        <NavItem title="Projets" to="projets"/>
        <NavItem title="Social" to="social"/>
        </div>
    )
    
}}


export default Navbar;
