/**
 * @fileoverview Styled components for the Features section
 */

import styled from '@emotion/styled'

/**
 * Theme configuration for the Features component.
 */
const theme = {
  colors: {
    primary: {
      bg: 'rgba(66, 99, 235, 0.1)',
      icon: '#4263EB'
    },
    secondary: {
      bg: 'rgba(124, 58, 237, 0.1)',
      icon: '#7C3AED'
    },
    accent: {
      bg: 'rgba(244, 114, 182, 0.1)',
      icon: '#F472B6'
    },
    text: {
      primary: '#1a1a1a',
      secondary: '#666'
    }
  }
}

/**
 * Grid container for feature cards.
 */
export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
  padding: 2rem;
`

/**
 * Card component for individual features.
 */
export const FeatureCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  transition: background-color 0.3s;
  
  &:hover {
    background: rgba(255, 255, 255, 0.8);
  }
`

/**
 * Container for feature icons with dynamic background colors.
 * 
 * @param {Object} props
 * @param {string} props.type - Color theme to apply (primary/secondary/accent)
 */
export const IconWrapper = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  background: ${props => theme.colors[props.type]?.bg || theme.colors.primary.bg};

  svg {
    width: 1.5rem;
    height: 1.5rem;
    color: ${props => theme.colors[props.type]?.icon || theme.colors.primary.icon};
  }
`

/**
 * Title component for feature cards.
 * Implements consistent typography and spacing.
 */
export const FeatureTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  text-align: center;
  color: ${theme.colors.text.primary};
`

/**
 * Text component for feature descriptions.
 * Maintains readable line height and consistent color.
 */
export const FeatureText = styled.p`
  color: ${theme.colors.text.secondary};
  text-align: center;
  line-height: 1.6;
` 