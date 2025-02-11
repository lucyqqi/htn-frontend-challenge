import styled from '@emotion/styled'
import { formatDate } from '../utils/dateFormatter'
import { EventType } from '../styles/theme'

const DetailsContainer = styled.div`
  width: 100%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 32px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`

const BackButton = styled.button`
  background: transparent;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`

const RelatedEvents = styled.div`
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  h3 {
    margin-bottom: 1rem;
  }
`

const RelatedEventLink = styled.button`
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`

const ContentSection = styled.div`
  margin: 1rem 0;
  line-height: 1.6;
`

const Title = styled.h2`
  font-size: 1.8rem;
  margin: 1rem 0;
`

export const EventDetails = ({ event, onBack, onSelectEvent, allEvents }) => {
  const { 
    name, 
    event_type, 
    start_time, 
    end_time,
    description, 
    speakers,
    related_events 
  } = event

  const relatedEventDetails = related_events
    ?.map(id => allEvents.find(e => e.id === id))
    .filter(Boolean) || []

  return (
    <DetailsContainer>
      <BackButton onClick={onBack}>&larr; Back to Events</BackButton>
      
      <Title>{name}</Title>
      <EventType type={event_type}>{event_type.replace('_', ' ')}</EventType>
      
      <ContentSection>
        <p><strong>Start:</strong> {formatDate(start_time)}</p>
        <p><strong>End:</strong> {formatDate(end_time)}</p>
        {description && <p style={{ marginTop: '1rem' }}>{description}</p>}
      </ContentSection>

      {speakers?.length > 0 && (
        <ContentSection>
          <h3>Speakers</h3>
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