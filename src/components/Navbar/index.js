import React from 'react'
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, MobileIcon, MobileMenu,  MobileLink } from './NavbarStyledComponent'
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { useTheme } from 'styled-components';
import styled from 'styled-components';
import HeroImg from '../../images/HeroImage.jpg'
const StyledImg = styled.img`
  width: 3rem;
  border-radius: 50%;
`;
const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme()
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}>
          <StyledImg src={HeroImg} /> <Span>Heustica</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen)
          }} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">Tentang</NavLink>
          <NavLink href='#skills'>Keahlian</NavLink>
          <NavLink href='#experience'>Pengalaman</NavLink>
          <NavLink href='#products'>Products</NavLink>
          <NavLink href='#testimonials'>Testimonial</NavLink>
        </NavItems>
        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => {
              setIsOpen(!isOpen)
            }}>Tentang</MobileLink>
            <MobileLink href='#skills' onClick={() => {
              setIsOpen(!isOpen)
            }}>Keahlian</MobileLink>
            <MobileLink href='#experience' onClick={() => {
              setIsOpen(!isOpen)
            }}>Pengalaman</MobileLink>
            <MobileLink href='#products' onClick={() => {
              setIsOpen(!isOpen)
            }}>products</MobileLink>
            <MobileLink href='#testimonials' onClick={() => {
              setIsOpen(!isOpen)
            }}>Testimonial</MobileLink>
          </MobileMenu>
        }
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar