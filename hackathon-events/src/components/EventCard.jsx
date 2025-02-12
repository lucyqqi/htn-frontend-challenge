import { formatDate } from '../utils/dateFormatter'
import {
  Card,
  Title,
  EventType,
  EventInfo,
  SpeakerSection
} from './EventCard.styles'

/**
 * Formats an event type string from snake_case to Title Case
 * @param {string} type - The event type in snake_case format
 * @returns {string} The formatted event type in Title Case
 */
const formatEventType = (type) => {
  return type
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

/**
 * EventCard component displays information about a single event
 * @param {Object} props
 * @param {Object} props.event - The event data object
 * @param {string} props.event.name - Event name
 * @param {string} props.event.event_type - Type of event (tech_talk, workshop, activity)
 * @param {string} props.event.start_time - Event start time
 * @param {string} props.event.description - Event description
 * @param {Array<Object>} props.event.speakers - Array of speaker objects
 * @param {Function} props.onClick - Click handler for the card
 */
export const EventCard = ({ event, onClick }) => {
  const { name, event_type, start_time, description, speakers } = event

  return (
    <Card 
      role="listitem" 
      tabIndex={0} 
      onClick={onClick}
      onKeyPress={(e) => e.key === 'Enter' && onClick()}
    >
      <Title>{name}</Title>
      <EventType type={event_type}>{formatEventType(event_type)}</EventType>
      
      <EventInfo>
        <p><strong>Time:</strong> {formatDate(start_time)}</p>
        {description && <p>{description}</p>}
      </EventInfo>
      
      {speakers?.length > 0 && (
        <SpeakerSection>
          <strong>Speakers:</strong>{' '}
          <span role="list">
            {speakers.map((speaker, index) => (
              <span key={index} role="listitem">
                {index > 0 ? ', ' : ''}{speaker.name}
              </span>
            ))}
          </span>
        </SpeakerSection>
      )}
    </Card>
  )
}