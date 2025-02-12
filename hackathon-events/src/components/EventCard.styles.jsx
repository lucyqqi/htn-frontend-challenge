import styled from '@emotion/styled'

/**
 * Theme configuration object containing all color values used across the EventCard component.
 * Centralizing these values makes it easier to maintain consistent styling and implement
 * theme switching in the future.
 */
const theme = {
  colors: {
    primary: '#1a1a1a',
    text: '#4B5563',
    eventTypes: {
      tech_talk: '#10B981',  // Green shade for technical content
      workshop: '#6366F1',   // Purple shade for interactive sessions
      activity: '#F59E0B',   // Orange shade for general activities
      default: '#6B7280'     // Neutral gray for fallback
    }
  }
}

/**
 * Reusable transition styles for interactive elements.
 * Provides smooth animation for both transform and shadow properties.
 */
const baseTransition = `
  transition: transform 0.2s, box-shadow 0.2s;
`

/**
 * Retrieves the appropriate color for an event type from the theme.
 * @param {string} type - The event type identifier (e.g., 'tech_talk', 'workshop')
 * @returns {string} The corresponding hex color code
 */
const getEventTypeColor = (type) => theme.colors.eventTypes[type] || theme.colors.eventTypes.default

/**
 * Main container component for the event card.
 * Implements hover and focus interactions with smooth transitions.
 */
export const Card = styled.article`
  background: white;
  border-radius: 16px;
  padding: 24px;
  margin: 20px 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  ${baseTransition}

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
`

/**
 * Event title component with consistent typography styling.
 */
export const Title = styled.h2`
  color: ${theme.colors.primary};
  font-size: 1.5rem;
  margin-bottom: 1rem;
`

/**
 * Badge component for displaying event type.
 * Uses dynamic background colors based on event type.
 */
export const EventType = styled.span`
  display: inline-block;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
  background: ${props => getEventTypeColor(props.type)};
  color: white;
  margin-bottom: 1rem;
`

/**
 * Container for event details like time and description.
 * Implements consistent text styling and spacing.
 */
export const EventInfo = styled.div`
  margin: 1rem 0;
  color: ${theme.colors.text};
  
  p {
    margin: 0.5rem 0;
    line-height: 1.6;
  }

  strong {
    color: ${theme.colors.primary};
  }
`

/**
 * Section for displaying speaker information.
 * Includes a subtle top border to separate it from other content.
 */
export const SpeakerSection = styled.div`
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  color: ${theme.colors.text};

  strong {
    color: ${theme.colors.primary};
  }
`