import styled from '@emotion/styled'
import { formatDate } from '../utils/dateFormatter'

const Card = styled.article`
  background: white;
  border-radius: 16px;
  padding: 24px;
  margin: 20px 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
`

const Title = styled.h2`
  color: #1a1a1a;
  font-size: 1.5rem;
  margin-bottom: 1rem;
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

const EventInfo = styled.div`
  margin: 1rem 0;
  color: #4B5563;
  
  p {
    margin: 0.5rem 0;
    line-height: 1.6;
  }

  strong {
    color: #1a1a1a;
  }
`

const SpeakerSection = styled.div`
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  color: #4B5563;

  strong {
    color: #1a1a1a;
  }
`

const formatEventType = (type) => {
  return type
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

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