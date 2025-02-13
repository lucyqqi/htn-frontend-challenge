import styled from '@emotion/styled'

/**
 * Theme configuration object containing all color values used across the FilterBar component.
 */
const theme = {
  colors: {
    primary: '#4263EB',
    white: '#FFFFFF',
    hover: 'rgba(66, 99, 235, 0.1)'
  },
  spacing: {
    gap: '1rem',
    padding: '8px 16px',
    margin: '0 auto 2rem'
  },
  borderRadius: '20px',
  transitions: {
    default: 'all 0.3s ease'
  }
}

/**
 * Container component for the filter buttons.
 * Uses flexbox layout to create a responsive, centered row of buttons
 * that wraps on smaller screens.
 */
export const FilterContainer = styled.div`
  display: flex;
  gap: ${theme.spacing.gap};
  margin: ${theme.spacing.margin};
  flex-wrap: wrap;
  justify-content: center;
`

/**
 * Button component for individual filter options.
 * Implements interactive states (hover, active) with smooth transitions
 * and maintains accessibility standards.
 * 
 * @param {Object} props
 * @param {boolean} props.isActive - Determines if the button is currently selected
 */
export const FilterButton = styled.button`
  /* Layout */
  padding: ${theme.spacing.padding};
  border-radius: ${theme.borderRadius};
  
  /* Typography */
  font-size: 0.875rem;
  font-weight: 500;
  
  /* Colors and Borders */
  background: ${props => props.isActive ? theme.colors.primary : theme.colors.white};
  color: ${props => props.isActive ? theme.colors.white : theme.colors.primary};
  border: 2px solid ${props => 
    props.isActive ? theme.colors.primary : theme.colors.hover
  };
  
  /* Interactive States */
  cursor: pointer;
  transition: ${theme.transitions.default};

  &:hover {
    background: ${props => 
      props.isActive ? theme.colors.primary : theme.colors.hover
    };
  }

  /* Accessibility - Ensure sufficient contrast and visible focus states */
  &:focus-visible {
    outline: 2px solid ${theme.colors.primary};
    outline-offset: 2px;
  }
` 