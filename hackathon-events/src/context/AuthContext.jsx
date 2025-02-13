import { createContext, useContext, useEffect, useState } from 'react'
import { auth, signInWithPopup, GoogleAuthProvider, signOut as firebaseSignOut } from '../config/firebase'

/**
 * Authentication context for managing user authentication state and methods.
 * @type {React.Context}
 */
const AuthContext = createContext()

/**
 * Provider component that wraps the app and makes auth object available to any
 * child component that calls useAuth().
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Child components to render
 * @returns {JSX.Element} AuthContext Provider component
 */
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider()
    try {
      const result = await signInWithPopup(auth, provider)
      return result.user
    } catch (error) {
      console.error('Error signing in with Google:', error)
      throw error
    }
  }

  const signOut = async () => {
    try {
      await firebaseSignOut(auth)
    } catch (error) {
      console.error('Error signing out:', error)
      throw error
    }
  }

  const value = {
    user,
    signInWithGoogle,
    signOut,
    isAuthenticated: !!user
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

/**
 * Custom hook to access authentication context
 * 
 * @returns {Object} Authentication context object containing:
 * @property {Object|null} user - The current user object or null if not authenticated
 * @property {Function} signInWithGoogle - Function to initiate Google sign-in
 * @property {Function} signOut - Function to sign out the current user
 * @property {boolean} isAuthenticated - Whether a user is currently authenticated
 * @throws {Error} If used outside of AuthProvider
 */
export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
} 