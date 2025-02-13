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

/**
 * Navbar component providing responsive navigation and authentication controls
 * 
 * @component
 * @example
 * return (
 *   <Navbar />
 * )
 */
export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { user, signInWithGoogle, signOut } = useAuth()
  const location = useLocation()

  /**
   * Toggles the mobile menu state
   * @function
   */
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)

  return (
    <Nav>
      <NavContent>
        {/* Logo and Home Link */}
        <Logo to="/">
          <LogoImage src={htnLogo} alt="Hack the North" />
        </Logo>

        {/* Mobile Menu Button */}
        <MobileMenuButton onClick={toggleMobileMenu} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </MobileMenuButton>

        {/* Navigation Links and Auth Button */}
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