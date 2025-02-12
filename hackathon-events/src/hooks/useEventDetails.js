import { useMemo } from 'react'

/**
 * Custom hook to handle event details logic and related events
 * @param {Object} props
 * @param {Object} props.event - Current event object
 * @param {Array} props.allEvents - Array of all available events
 * @returns {Object} Processed event data and related events
 */
export const useEventDetails = ({ event, allEvents }) => {
  // Extract event properties
  const { 
    name, 
    event_type, 
    start_time, 
    end_time,
    description, 
    speakers,
    related_events 
  } = event

  // Memoize related events to prevent unnecessary recalculations
  const relatedEventDetails = useMemo(() => {
    return related_events
      ?.map(id => allEvents.find(e => e.id === id))
      .filter(Boolean) || []
  }, [related_events, allEvents])

  // Format event type for display
  const formattedEventType = useMemo(() => {
    return event_type
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  }, [event_type])

  return {
    eventDetails: {
      name,
      event_type,
      start_time,
      end_time,
      description,
      speakers,
      formattedEventType
    },
    relatedEventDetails
  }
} 