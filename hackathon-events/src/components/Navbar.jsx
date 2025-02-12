import styled from '@emotion/styled'
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: white;
  padding: 1rem 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  z-index: 1000;
`

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled(Link)`
  color: #000;
  text-decoration: none;
  font-size: 1.25rem;
  font-weight: 600;
`

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`

const NavLink = styled(Link)`
  color: #000;
  text-decoration: none;
  font-weight: 500;
  opacity: ${props => props.$active ? 1 : 0.7};
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
`

const AuthButton = styled.button`
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
`

export const Navbar = () => {
  const { user, signInWithGoogle, signOut } = useAuth()
  const location = useLocation()

  return (
    <Nav>
      <NavContent>
        <Logo to="/">Hack the North</Logo>
        <NavLinks>
          <NavLink to="/" $active={location.pathname === "/"}>Home</NavLink>
          <NavLink to="/events" $active={location.pathname === "/events"}>Events</NavLink>
          <AuthButton onClick={user ? signOut : signInWithGoogle}>
            {user ? 'Sign Out' : 'Sign in with Google'}
          </AuthButton>
        </NavLinks>
      </NavContent>
    </Nav>
  )
}