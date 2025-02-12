import styled from '@emotion/styled'
import { formatDate } from '../utils/dateFormatter'

const DetailsContainer = styled.div`
  width: 100%;
  background: white;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  color: #1a1a1a;
`

const BackButton = styled.button`
  background: white;
  color: #4263EB;
  border: 1px solid #4263EB;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background: #4263EB;
    color: white;
  }
`

const RelatedEvents = styled.div`
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);

  h3 {
    margin-bottom: 1rem;
    color: #1a1a1a;
  }
`

const RelatedEventLink = styled.button`
  background: #f3f4f6;
  color: #4263EB;
  border: none;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #4263EB;
    color: white;
  }
`

const ContentSection = styled.div`
  margin: 1rem 0;
  line-height: 1.6;
  color: #4B5563;

  strong {
    color: #1a1a1a;
  }
`

const Title = styled.h2`
  font-size: 1.8rem;
  margin: 1rem 0;
  color: #1a1a1a;
`

const EventType = styled.span`
  display: inline-block;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
  background: ${props => {
    switch (props.type) {
      case 'tech_talk': return '#10B981';
      case 'workshop': return '#6366F1';
      case 'activity': return '#F59E0B';
      default: return '#6B7280';
    }
  }};
  color: white;
  margin-bottom: 1rem;
`

const formatEventType = (type) => {
  return type
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

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
      <EventType type={event_type}>
        {formatEventType(event_type)}
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