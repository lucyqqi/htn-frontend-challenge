/**
 * @fileoverview Home page component
 * Serves as the main landing page of the application
 */

import { Hero } from '../components/Hero/Hero'

/**
 * Home page component that composes the main landing page
 * Currently renders the Hero section, can be extended with more sections
 * 
 * @component
 * @example
 * return (
 *   <Home />
 * )
 */
export const Home = () => {
  return <Hero />
} 