/**
 * @fileoverview Home page component
 * Serves as the main landing page of the application
 */

import styled from '@emotion/styled'
import { Features } from '../components/Features/Features'
import { FloatingDecorations } from '../components/FloatingDecorations/FloatingDecorations'
import { HeroText } from '../components/HeroText/HeroText'

/**
 * Container for the entire home page
 */
const HomeContainer = styled.div`
  min-height: 100vh;
  position: relative;
  overflow: hidden;
`

/**
 * Wrapper for the main content
 */
const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 14rem 2rem 16rem;
  text-align: center;
  position: relative;
  z-index: 2;
`

/**
 * Home page component that composes the main landing page sections
 * 
 * @component
 * @example
 * return (
 *   <Home />
 * )
 */
export const Home = () => {
  return (
    <HomeContainer>
      <FloatingDecorations />
      <ContentWrapper>
        <HeroText />
        <Features />
      </ContentWrapper>
    </HomeContainer>
  )
} 