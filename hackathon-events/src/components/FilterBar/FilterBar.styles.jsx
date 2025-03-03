import styled from '@emotion/styled'

/**
 * Container component for the filter buttons.
 */
export const FilterContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin: 0 auto 2rem;
  flex-wrap: wrap;
  justify-content: center;
`

/**
 * Interactive button component for filter options.
 * 
 * Props:
 * @param {boolean} isActive - Determines if the filter is currently selected
 * 
 * States:
 * - Default: White background with blue border
 * - Active: Blue background with white text
 * - Hover: Light blue background when inactive
 */
export const FilterButton = styled.button`
  padding: 8px 16px;
  border-radius: 20px;
  border: none;
  background: ${props => props.isActive ? '#4263EB' : 'white'};
  color: ${props => props.isActive ? 'white' : '#4263EB'};
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid ${props => props.isActive ? '#4263EB' : 'rgba(66, 99, 235, 0.1)'};

  &:hover {
    background: ${props => props.isActive ? '#4263EB' : 'rgba(66, 99, 235, 0.1)'};
  }
` 