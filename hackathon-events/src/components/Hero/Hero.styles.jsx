/**
 * @fileoverview Styled components for the Hero section
 */

import styled from '@emotion/styled'

/**
 * Theme configuration for the Hero component
 */
const theme = {
  colors: {
    gradient: 'linear-gradient(135deg, #4263EB, #7C3AED, #F472B6)',
    text: {
      primary: 'transparent',
      secondary: '#666'
    }
  },
  spacing: {
    paddingTop: '80px',
    contentPadding: '8rem 2rem 4rem'
  }
}

/**
 * Main container for the hero section
 */
export const HeroContainer = styled.section`
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  padding-top: ${theme.spacing.paddingTop};
`

/**
 * Wrapper for the main content
 */
export const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${theme.spacing.contentPadding};
  text-align: center;
  position: relative;
  z-index: 2;
`

/**
 * Main headline component
 */
export const Title = styled.h1`
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: bold;
  background: ${theme.colors.gradient};
  -webkit-background-clip: text;
  color: ${theme.colors.text.primary};
  margin-bottom: 1.5rem;
`

/**
 * Subtitle component
 */
export const Subtitle = styled.p`
  font-size: 1.25rem;
  color: ${theme.colors.text.secondary};
  max-width: 800px;
  margin: 0 auto;
` 