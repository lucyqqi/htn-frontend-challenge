/**
 * @fileoverview Component for rendering the filtered list of events
 */

import { EventCard } from '../EventCard/EventCard'
import { EventsList as StyledEventsList, ErrorText } from './EventsList.styles'

export const EventsList = ({ events, onEventSelect }) => {
  return (
    <StyledEventsList role="list" aria-label="Hackathon events">
      {events.length > 0 ? (
        events.map((event) => (
          <EventCard 
            key={event.id} 
            event={event}
            onClick={() => onEventSelect(event)}
          />
        ))
      ) : (
        <ErrorText>
          No events found matching your criteria.
        </ErrorText>
      )}
    </StyledEventsList>
  )
} 