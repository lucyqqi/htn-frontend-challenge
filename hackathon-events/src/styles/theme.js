import styled from '@emotion/styled'

/**
 * Container component for consistent layout and responsive design
 */
export const Container = styled.main`
  width: 55%; /* Reduced from 70% to 55% */
  margin: 0 auto;
  padding: 80px 20px 40px; /* Added top padding for navbar */
  display: flex;
  flex-direction: column;
  align-items: center; /* Center content horizontally */
 
`

export const EventsGrid = styled.div`
  width: 100%; /* Take full width of container */
  display: flex;
  flex-direction: column;
  gap: 20px; /* Consistent spacing between cards */
  align-items: center; /* Center cards */
`

/**
 * Common heading styles
 */
export const PageHeading = styled.h1`
  color: #ffffff;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  text-align: center;
  font-weight: 700;
`

export const EventType = styled.span`
  background-color: ${props => {
    switch (props.type) {
      case 'workshop':
        return '#646cff';
      case 'tech_talk':
        return '#00c4a7';
      default:
        return '#ff49db';
    }
  }};
  color: white;
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 0.875rem;
  font-weight: 500;
  text-transform: capitalize;
`