import styled from '@emotion/styled'

/**
 * Container component for consistent layout and responsive design
 */
export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  
  @media (max-width: 768px) {
    padding: 15px;
  }
`

/**
 * Common heading styles
 */
export const PageHeading = styled.h1`
  color: #2c3e50;
  margin-bottom: 1.5rem;
  font-size: 2rem;
`