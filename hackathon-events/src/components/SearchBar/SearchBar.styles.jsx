import styled from '@emotion/styled'

/**
 * Container component for the search input.
 * Uses responsive padding and width based on viewport size.
 */
export const SearchContainer = styled.div`
  margin: 0 auto 2rem;
  width: 90%; 
  max-width: 500px;
  padding: 0 1rem;

  /* Responsive adjustments for different screen sizes */
  @media (max-width: 768px) {
    width: 95%;
    margin: 0 auto 1.5rem;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 0 0.75rem;
    margin: 0 auto 1rem;
  }
`

/**
 * Styled input component for search functionality.
 */
export const SearchInput = styled.input`
  width: 100%;
  padding: 12px 20px;
  border: 2px solid rgba(66, 99, 235, 0.1);
  border-radius: 12px;
  font-size: 1rem;
  background: white;
  color: #1a1a1a;
  transition: all 0.3s ease;
  -webkit-appearance: none; 
  
  /* Adjust padding and font size for mobile */
  @media (max-width: 480px) {
    padding: 10px 16px;
    font-size: 0.95rem;
    border-radius: 8px;
  }

  &:focus {
    outline: none;
    border-color: #4263EB;
    box-shadow: 0 0 0 3px rgba(66, 99, 235, 0.1);
  }

  &::placeholder {
    color: #9CA3AF;
  }

  /* Improve touch targets on mobile */
  @media (hover: none) and (pointer: coarse) {
    min-height: 44px; /* Minimum touch target size */
  }
` 