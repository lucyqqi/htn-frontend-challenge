import styled from '@emotion/styled'
import { formatDate } from '../utils/dateFormatter'

/**
 * Styled card component for displaying event information
 */
const Card = styled.article`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  margin: 10px 0;
  background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 15px;
  }
`

/**
 * EventCard component for displaying individual event information
 * @param {Object} props - Component props
 * @param {Object} props.event - Event data
 */
export const EventCard = ({ event }) => {
  const { name, event_type, start_time, description, speakers } = event

  return (
    <Card role="listitem" tabIndex={0}>
      <h2>{name}</h2>
      <div>
        <p><strong>Type:</strong> {event_type}</p>
        <p><strong>Time:</strong> {formatDate(start_time)}</p>
        
        {description && <p>{description}</p>}
        
        {speakers.length > 0 && (
          <div>
            <strong>Speakers:</strong>{' '}
            <span role="list">
              {speakers.map((speaker, index) => (
                <span key={index} role="listitem">
                  {index > 0 ? ', ' : ''}{speaker.name}
                </span>
              ))}
            </span>
          </div>
        )}
      </div>
    </Card>
  )
}