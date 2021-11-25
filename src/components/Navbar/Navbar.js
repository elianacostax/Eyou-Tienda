import React, {useContext} from "react";
import { HiOutlineMenuAlt3, HiOutlineX, HiShoppingCart } from "react-icons/hi";
import useNavbar from '../../hooks/useNavbar'
import {DataContext} from '../../context/DataProvider'
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavItemContact,
  NavBtnLink,
  CartIcon,
  TotalItem,
  Cart
} from "./Navbar.elements";


const Navbar = () => {
  const [click, scrollNav, ChangeClick] = useNavbar();
  const value = useContext(DataContext);
  const [menu, setMenu] = value.menu;
  const [carrito] = value.carrito

 

  const toogleMenu = () => {
      setMenu(!menu)
  }


  return (
    <>
      <Nav scrollNav={scrollNav} >
        <NavbarContainer>
          <NavLogo scrollNav={scrollNav} to="/">Eyou</NavLogo>

          <MobileIcon onClick={() => ChangeClick()}>
            {click ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
          </MobileIcon>

          <NavMenu click={click}>
            <NavItem>
              <NavLinks scrollNav={scrollNav} to="/" onClick={() => ChangeClick()}>
                Inicio
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks scrollNav={scrollNav} to="/productos" onClick={() => ChangeClick()}>
                Productos
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks scrollNav={scrollNav} to="/quienes-somos" onClick={() => ChangeClick()}>
                ¿Quienes somos?
              </NavLinks>
            </NavItem>

            <NavItemContact>
              <NavBtnLink scrollNav={scrollNav} to="/contactanos" onClick={() => ChangeClick()}>
                Contactanos
              </NavBtnLink>
            </NavItemContact>


            <Cart  onClick={()=>{toogleMenu()}}>
              <CartIcon scrollNav={scrollNav}>
               <HiShoppingCart />
              </CartIcon>
                <TotalItem > {carrito.length} </TotalItem>
            </Cart>
          </NavMenu>

        </NavbarContainer>
      </Nav>
    </>
  );
};
export default Navbar;
