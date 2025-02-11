import styled from '@emotion/styled'
import { useAuth } from '../context/AuthContext'

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem 2rem;
  background: rgba(27, 42, 78, 0.95);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
`

const Logo = styled.h1`
  font-size: 1.5rem;
  color: white;
  margin: 0;
`

const AuthSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

const UserAvatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`

const AuthButton = styled.button`
  background: ${props => props.variant === 'logout' ? 'transparent' : '#646cff'};
  color: white;
  border: ${props => props.variant === 'logout' ? '1px solid rgba(255,255,255,0.2)' : 'none'};
  padding: 0.5rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.variant === 'logout' ? 'rgba(255,255,255,0.1)' : '#7c82ff'};
  }
`

export const Navbar = () => {
  const { isAuthenticated, user, login, logout } = useAuth()

  return (
    <Nav>
      <Logo>Hackathon Events</Logo>
      <AuthSection>
        {isAuthenticated ? (
          <>
            <UserInfo>
              {user?.photoURL && (
                <UserAvatar src={user.photoURL} alt={user.displayName} />
              )}
              <span>{user?.displayName}</span>
            </UserInfo>
            <AuthButton variant="logout" onClick={logout}>
              Logout
            </AuthButton>
          </>
        ) : (
          <AuthButton onClick={login}>
            Sign in with Google
          </AuthButton>
        )}
      </AuthSection>
    </Nav>
  )
} 