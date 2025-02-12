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

export const EventDetails = ({ event, onBack, onSelectEvent, allEvents }) => {
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
      
      <Title>{name}</Title>
      <EventType type={event_type}>
        {formattedEventType}
      </EventType>
      
      <ContentSection>
        <p><strong>Start:</strong> {formatDate(start_time)}</p>
        <p><strong>End:</strong> {formatDate(end_time)}</p>
        {description && <p style={{ marginTop: '1rem' }}>{description}</p>}
      </ContentSection>

      {speakers?.length > 0 && (
        <ContentSection>
          <h3 style={{ color: '#1a1a1a', marginBottom: '0.5rem' }}>Speakers</h3>
          {speakers.map((speaker, index) => (
            <p key={index}>{speaker.name}</p>
          ))}
        </ContentSection>
      )}

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