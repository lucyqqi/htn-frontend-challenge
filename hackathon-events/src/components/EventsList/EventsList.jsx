/**
 * @fileoverview Component for rendering the filtered list of events
 * Handles both the display of event cards and empty state messaging
 */

import { EventCard } from '../EventCard/EventCard'
import { EventsList as StyledEventsList, ErrorText } from './EventsList.styles'

/**
 * EventsList component that renders a list of event cards or an error message
 * 
 * @component
 * @param {Object} props - Component props
 * @param {Array} props.events - Array of event objects to display
 * @param {Function} props.onEventSelect - Callback function when an event is selected
 * 
 * @example
 * return (
 *   <EventsList 
 *     events={eventArray}
 *     onEventSelect={(event) => handleEventSelect(event)}
 *   />
 * )
 */
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