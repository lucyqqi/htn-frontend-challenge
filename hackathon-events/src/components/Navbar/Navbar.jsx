/**
 * @fileoverview Responsive navigation component
 */

import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import htnLogo from '../../assets/images/htnlogo.png'
import {
  Nav,
  NavContent,
  Logo,
  LogoImage,
  NavLinks,
  NavLink,
  AuthButton,
  MobileMenuButton,
  MobileMenu
} from './Navbar.styles'

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { user, signInWithGoogle, signOut } = useAuth()
  const location = useLocation()

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)

  return (
    <Nav>
      <NavContent>
        <Logo to="/">
          <LogoImage src={htnLogo} alt="Hack the North" />
        </Logo>

        {/* Mobile Menu Button */}
        <MobileMenuButton onClick={toggleMobileMenu} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </MobileMenuButton>

        {/* Desktop & Mobile Navigation */}
        <NavLinks $isOpen={isMobileMenuOpen}>
          <NavLink 
            to="/" 
            $active={location.pathname === "/"} 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink 
            to="/events" 
            $active={location.pathname === "/events"}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Events
          </NavLink>
          <AuthButton onClick={() => {
            user ? signOut() : signInWithGoogle()
            setIsMobileMenuOpen(false)
          }}>
            {user ? 'Sign Out' : 'Sign in with Google'}
          </AuthButton>
        </NavLinks>
      </NavContent>
    </Nav>
  )
} 