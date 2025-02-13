import styled from '@emotion/styled'

/**
 * Theme configuration object containing all color values used across the EventDetails component.
 */
const theme = {
  colors: {
    primary: '#1a1a1a',
    text: '#4B5563',
    accent: '#4263EB',
    eventTypes: {
      tech_talk: '#10B981',  // Green shade for technical content
      workshop: '#6366F1',   // Purple shade for interactive sessions
      activity: '#F59E0B',   // Orange shade for general activities
      default: '#6B7280'     // Neutral gray for fallback
    }
  }
}

/**
 * Main container for the event details page.
 */
export const DetailsContainer = styled.div`
  width: 100%;
  background: white;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  color: ${theme.colors.primary};
`

/**
 * Back button with hover interaction.
 */
export const BackButton = styled.button`
  background: white;
  color: ${theme.colors.accent};
  border: 1px solid ${theme.colors.accent};
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background: ${theme.colors.accent};
    color: white;
  }
`

/**
 * Container for related events section.
 */
export const RelatedEvents = styled.div`
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);

  h3 {
    margin-bottom: 1rem;
    color: ${theme.colors.primary};
  }
`

/**
 * Button style for related event links.
 */
export const RelatedEventLink = styled.button`
  background: #f3f4f6;
  color: ${theme.colors.accent};
  border: none;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${theme.colors.accent};
    color: white;
  }
`

/**
 * Container for content sections with consistent typography.
 */
export const ContentSection = styled.div`
  margin: 1rem 0;
  line-height: 1.6;
  color: ${theme.colors.text};

  strong {
    color: ${theme.colors.primary};
  }
`

/**
 * Main title component.
 */
export const Title = styled.h2`
  font-size: 1.8rem;
  margin: 1rem 0;
  color: ${theme.colors.primary};
`

/**
 * Event type badge with dynamic background color.
 */
export const EventType = styled.span`
  display: inline-block;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
  background: ${props => theme.colors.eventTypes[props.type] || theme.colors.eventTypes.default};
  color: white;
  margin-bottom: 1rem;
`