import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";


export const Nav = styled.nav`
  background: ${({scrollNav}) => (scrollNav ? '#000' : 'transparent')};
  height: 80px;
  /* margin-top: -80px; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  transition: 0.3s all ease;

  @media screen and (max-width: 960px) {
    transition: 0.3s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  color: ${({scrollNav}) => (scrollNav ? '#fff' : '#000')};
  justify-content: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
  font-family: 'Poppins';
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 968px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 2rem;
    cursor: pointer;
    color: #fff;
  }
`;
export const Cart = styled.div`
  position: relative;
    cursor: pointer;

    @media screen and (max-width: 968px) {
    bottom: 555px;
    left: 430px;
    
  }
`;

export const CartIcon = styled.div`
  color: ${({scrollNav}) => (scrollNav ? '#fff' : '#000')};
  font-size: 3rem;
  
  @media screen and (max-width: 968px) {
   color: #fff;
   font-size: 2.5rem;
  }
`;

export const TotalItem = styled.span`
  position: absolute;
    top: -.5rem;
    left: 2rem;
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    padding: 0rem;
    font-size: 1rem;
    font-weight: 700;
    border-radius: 50%;
    background-color: crimson;
`;


export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media screen and (max-width: 968px) {
    width: 70%;
    height: 100vh;
    position: absolute;
    top: 78px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    flex-direction: column;
    transition: 0.3s all ease-in;
    background-color: #000;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: 400;

  @media screen and (max-width: 968px) {
    font-size: 1.5em;
    padding: 0em;
  }
`;

export const NavLinks = styled(LinkR)`
  color: ${({scrollNav}) => (scrollNav ? '#fff' : '#000')};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  transition: 0.2s all ease;
  font-family: 'Poppins', sans-serif;

  &:active {
    border-bottom: 3px solid #01bf71;
  }
  &:hover {
    color: #01bf71;
  }
  @media screen and (max-width: 968px) {
    color: #fff;
    padding: 0 ;
  }
`;

export const NavItemContact = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 968px) {
    margin-top: 90px;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  font-family: 'Poppins', sans-serif;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #01e98c;
    color: #000;
  }
  @media screen and (max-width: 968px) {
    display: flex;
    justify-content: center;
    justify-items: center;
    text-align: center;
  }
`;
