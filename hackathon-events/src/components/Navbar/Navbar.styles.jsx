/**
 * @fileoverview Styled components for responsive navigation
 */

import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

/**
 * Theme configuration for consistent styling
 */
const theme = {
  colors: {
    primary: '#4263EB',
    primaryHover: '#3451c9',
    text: '#666',
    background: 'white'
  },
  breakpoints: {
    mobile: '768px'
  },
  maxWidth: '1200px',
  spacing: {
    nav: '1rem'
  }
}

// Breakpoints for responsive design
const breakpoints = {
  mobile: '768px',
}

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: white;
  padding: 1rem 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  z-index: 1000;
`

export const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`

export const Logo = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  z-index: 1001; // Keep logo above mobile menu
`

export const LogoImage = styled.img`
  height: 32px;
  width: auto;
  object-fit: contain;
`

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: ${breakpoints.mobile}) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: white;
    flex-direction: column;
    padding: 80px 2rem 2rem;
    gap: 1.5rem;
    transform: ${props => props.$isOpen ? 'translateY(0)' : 'translateY(-100%)'};
    transition: transform 0.3s ease-in-out;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`

export const NavLink = styled(Link)`
  color: #666;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;

  &:hover {
    color: #4263EB;
  }

  ${props => props.$active && `
    color: #4263EB;
  `}
`

export const AuthButton = styled.button`
  background: #4263EB;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background: #3451c9;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
  }
`

export const MobileMenuButton = styled.button`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1001;

  span {
    width: 100%;
    height: 3px;
    background: #4263EB;
    border-radius: 3px;
    transition: transform 0.3s ease;
  }

  @media (max-width: ${breakpoints.mobile}) {
    display: flex;
  }
`

export const MobileMenu = styled.div`
  display: none;
  
  @media (max-width: ${breakpoints.mobile}) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: white;
    padding: 80px 2rem 2rem;
    transform: ${props => props.$isOpen ? 'translateY(0)' : 'translateY(-100%)'};
    transition: transform 0.3s ease-in-out;
  }
` 