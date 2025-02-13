/**
 * @fileoverview Main events page component that handles event fetching, filtering, and display
 */

import { useState, useEffect } from 'react'
import { EventsLayout } from '../components/EventsLayout/EventsLayout'
import { EventsList } from '../components/EventsList/EventsList'
import { EventDetails } from '../components/EventDetails/EventDetails'
import { SearchBar } from '../components/SearchBar/SearchBar'
import { FilterBar } from '../components/FilterBar/FilterBar'
import { useEventFiltering } from '../hooks/useEventFiltering'

/**
 * Main Events page component that manages event data and view states.
 * Handles fetching events from API, filtering, searching, and displaying either
 * the events list or detailed view of a selected event.
 * 
 * @component
 * @returns {JSX.Element} Events page component
 */
export const Events = () => {
  /** @type {[Array, Function]} Events data and setter */
  const [events, setEvents] = useState([])
  /** @type {[boolean, Function]} Loading state and setter */
  const [loading, setLoading] = useState(true)
  /** @type {[string|null, Function]} Error state and setter */
  const [error, setError] = useState(null)
  /** @type {[Object|null, Function]} Selected event for detailed view and setter */
  const [selectedEvent, setSelectedEvent] = useState(null)
  
  /**
   * Custom hook that provides filtering and search functionality
   * @type {Object} Filter state and methods
   * @property {string} searchQuery - Current search term
   * @property {Function} setSearchQuery - Search term setter
   * @property {string} activeFilter - Current active filter
   * @property {Function} setActiveFilter - Filter setter
   * @property {Array} visibleEvents - Filtered and searched events list
   */
  const {
    searchQuery,
    setSearchQuery,
    activeFilter,
    setActiveFilter,
    visibleEvents
  } = useEventFiltering(events)

  /**
   * Fetches events from the API on component mount
   * Sorts events by start time and handles loading/error states
   */
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('https://api.hackthenorth.com/v3/events')
        if (!response.ok) throw new Error('Failed to fetch events')
        const data = await response.json()
        
        const sortedEvents = [...data].sort((a, b) => a.start_time - b.start_time)
        setEvents(sortedEvents)
      } catch (error) {
        console.error('Error fetching events:', error)
        setError('Failed to fetch events. Please try again later.')
      } finally {
        setLoading(false)
      }
    }

    fetchEvents()
  }, [])

  return (
    <EventsLayout>
      {loading ? (
        <div role="alert" aria-busy="true">Loading events...</div>
      ) : error ? (
        <div role="alert">{error}</div>
      ) : selectedEvent ? (
        <EventDetails 
          event={selectedEvent}
          onBack={() => setSelectedEvent(null)}
          onSelectEvent={setSelectedEvent}
          allEvents={events}
        />
      ) : (
        <>
          <SearchBar 
            value={searchQuery}
            onChange={setSearchQuery}
          />
          <FilterBar
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />
          <EventsList 
            events={visibleEvents}
            onEventSelect={setSelectedEvent}
          />
        </>
      )}
    </EventsLayout>
  )
} 