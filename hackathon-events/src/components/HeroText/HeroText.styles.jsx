/**
 * @fileoverview Styled components for the hero text content
 */

import styled from '@emotion/styled'

/**
 * Theme configuration for consistent styling
 */
const theme = {
  colors: {
    gradient: 'linear-gradient(135deg, #4263EB, #7C3AED, #F472B6)',
    text: {
      primary: 'transparent',
      secondary: '#666'
    }
  }
}

/**
 * Main headline component with gradient text effect
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
 * Subtitle component with consistent styling
 */
export const Subtitle = styled.p`
  font-size: 1.25rem;
  color: ${theme.colors.text.secondary};
  max-width: 800px;
  margin: 0 auto;
` 