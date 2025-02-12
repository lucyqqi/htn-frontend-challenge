import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { EventCard } from '../components/EventCard'
import { EventDetails } from '../components/EventDetails'
import { useAuth } from '../context/AuthContext'

const EventsContainer = styled.div`
  padding-top: 100px;
`

const Title = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
`

export const Events = () => {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedEvent, setSelectedEvent] = useState(null)
  const { isAuthenticated } = useAuth()

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

  // Filter events based on authentication status
  const visibleEvents = events.filter(event => 
    isAuthenticated ? true : event.permission === 'public'
  )

  if (loading) {
    return (
      <EventsContainer>
        <Title>Hackathon Events</Title>
        <div role="alert" aria-busy="true" aria-live="polite">
          Loading events...
        </div>
      </EventsContainer>
    )
  }

  if (error) {
    return (
      <EventsContainer>
        <Title>Hackathon Events</Title>
        <div role="alert" aria-live="assertive">
          {error}
        </div>
      </EventsContainer>
    )
  }

  return (
    <EventsContainer>
      <Title>Hackathon Events</Title>
      {selectedEvent ? (
        <EventDetails 
          event={selectedEvent}
          onBack={() => setSelectedEvent(null)}
          onSelectEvent={setSelectedEvent}
          allEvents={events}
        />
      ) : (
        <div role="list" aria-label="Hackathon events">
          {visibleEvents.map((event) => (
            <EventCard 
              key={event.id} 
              event={event}
              onClick={() => setSelectedEvent(event)}
            />
          ))}
        </div>
      )}
    </EventsContainer>
  )
} 