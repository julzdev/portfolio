import React from 'react';
import { Nav, NavbarContainer, NavLogo, NavMenu, NavItem, NavLinks } from './NavbarElements';
import { StyledBurgerIcon } from '../BurgerIcon/BurgerElement';
import { GrAd } from 'react-icons/gr';

const Navbar = ({ isOpen, toggle }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>
                        <GrAd style={{width: 30, height: 30}} />
                    </NavLogo>
                    <StyledBurgerIcon isOpen={isOpen} toggle={toggle} />
                    <NavMenu>
                        <NavItem>
                            <NavLinks as="a" to='about'>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks as="a" to='work'>Work</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks as="a" to='contact'>Contact</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;
