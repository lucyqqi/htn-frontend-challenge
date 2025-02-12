import styled from '@emotion/styled'
import { useAuth } from '../context/AuthContext'
import { Link, useLocation } from 'react-router-dom'

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(27, 42, 78, 0.8);
  backdrop-filter: blur(10px);
  padding: 1rem 0;
  z-index: 1000;
`

const NavContent = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
`

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  opacity: ${props => props.$active ? 1 : 0.7};
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
`

const AuthButton = styled.button`
  background: #4285f4;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.2s;

  &:hover {
    background: #357abd;
  }
`

export const Navbar = () => {
  const { user, signInWithGoogle, signOut } = useAuth()
  const location = useLocation()

  const handleAuth = async () => {
    if (user) {
      await signOut()
    } else {
      try {
        await signInWithGoogle()
      } catch (error) {
        console.error('Authentication error:', error)
      }
    }
  }

  return (
    <Nav>
      <NavContent>
        <Logo to="/">Hack The North</Logo>
        <NavLinks>
          <NavLink to="/" $active={location.pathname === "/"}>Home</NavLink>
          <NavLink to="/events" $active={location.pathname === "/events"}>Events</NavLink>
          <AuthButton onClick={handleAuth}>
            {user ? 'Sign Out' : 'Sign in with Google'}
          </AuthButton>
        </NavLinks>
      </NavContent>
    </Nav>
  )
}