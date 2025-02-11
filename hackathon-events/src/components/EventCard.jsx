import styled from '@emotion/styled'
import { formatDate } from '../utils/dateFormatter'
import { EventType } from '../styles/theme'

const Card = styled.article`
  border-radius: 16px;
  padding: 24px;
  margin: 20px 0;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    background: rgba(255, 255, 255, 0.15);
  }

  h2 {
    color: #ffffff;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
`

const EventInfo = styled.div`
  margin: 1rem 0;
  
  p {
    margin: 0.5rem 0;
  }
`

const SpeakerSection = styled.div`
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`

export const EventCard = ({ event, onClick }) => {
  const { name, event_type, start_time, description, speakers } = event

  return (
    <Card 
      role="listitem" 
      tabIndex={0} 
      onClick={onClick}
      onKeyPress={(e) => e.key === 'Enter' && onClick()}
    >
      <h2>{name}</h2>
      <EventType type={event_type}>{event_type.replace('_', ' ')}</EventType>
      
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