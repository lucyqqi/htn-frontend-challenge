/**
 * @fileoverview Event details component for displaying comprehensive event information
 * Handles the display of event details, speakers, and related events
 */

import { useEventDetails } from '../../hooks/useEventDetails'
import { formatDate } from '../../utils/dateFormatter'
import {
  DetailsContainer,
  BackButton,
  Title,
  EventType,
  ContentSection,
  RelatedEvents,
  RelatedEventLink
} from './EventDetails.styles'

/**
 * EventDetails component displays comprehensive information about a selected event
 * 
 * @component
 * @param {Object} props - Component props
 * @param {Object} props.event - The event object to display details for
 * @param {Function} props.onBack - Callback function to handle navigation back to events list
 * @param {Function} props.onSelectEvent - Callback function when a related event is selected
 * @param {Array} props.allEvents - Array of all events for related events lookup
 * 
 * @example
 * return (
 *   <EventDetails
 *     event={selectedEvent}
 *     onBack={() => setSelectedEvent(null)}
 *     onSelectEvent={handleEventSelect}
 *     allEvents={events}
 *   />
 * )
 */
export const EventDetails = ({ event, onBack, onSelectEvent, allEvents }) => {
  // Get processed event details and related events using custom hook
  const { eventDetails, relatedEventDetails } = useEventDetails({ 
    event, 
    allEvents 
  })

  const { 
    name, 
    event_type, 
    start_time, 
    end_time,
    description, 
    speakers,
    formattedEventType 
  } = eventDetails

  return (
    <DetailsContainer>
      <BackButton onClick={onBack}>&larr; Back to Events</BackButton>
      
      {/* Event Header */}
      <Title>{name}</Title>
      <EventType type={event_type}>
        {formattedEventType}
      </EventType>
      
      {/* Event Time and Description */}
      <ContentSection>
        <p><strong>Start:</strong> {formatDate(start_time)}</p>
        <p><strong>End:</strong> {formatDate(end_time)}</p>
        {description && <p style={{ marginTop: '1rem' }}>{description}</p>}
      </ContentSection>

      {/* Speakers Section */}
      {speakers?.length > 0 && (
        <ContentSection>
          <h3 style={{ color: '#1a1a1a', marginBottom: '0.5rem' }}>Speakers</h3>
          {speakers.map((speaker, index) => (
            <p key={index}>{speaker.name}</p>
          ))}
        </ContentSection>
      )}

      {/* Related Events Section */}
      {relatedEventDetails.length > 0 && (
        <RelatedEvents>
          <h3>Related Events</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {relatedEventDetails.map(relatedEvent => (
              <RelatedEventLink
                key={relatedEvent.id}
                onClick={() => onSelectEvent(relatedEvent)}
              >
                {relatedEvent.name}
              </RelatedEventLink>
            ))}
          </div>
        </RelatedEvents>
      )}
    </DetailsContainer>
  )
} 