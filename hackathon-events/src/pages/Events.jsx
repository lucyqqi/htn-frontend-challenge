/**
 * @fileoverview Main events page component
 */

import { useState, useEffect } from 'react'
import { EventsLayout } from '../components/EventsLayout/EventsLayout'
import { EventsList } from '../components/EventsList/EventsList'
import { EventDetails } from '../components/EventDetails/EventDetails'
import { SearchBar } from '../components/SearchBar/SearchBar'
import { FilterBar } from '../components/FilterBar/FilterBar'
import { useEventFiltering } from '../hooks/useEventFiltering'

export const Events = () => {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedEvent, setSelectedEvent] = useState(null)
  
  const {
    searchQuery,
    setSearchQuery,
    activeFilter,
    setActiveFilter,
    visibleEvents
  } = useEventFiltering(events)

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