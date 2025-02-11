import { useState, useEffect } from 'react'
import { EventCard } from './components/EventCard'
import { EventDetails } from './components/EventDetails'
import { Navbar } from './components/Navbar'
import { Container } from './styles/theme'
import { useAuth } from './context/AuthContext'
import './styles/global.css'

/**
 * Main App component that manages and displays hackathon events
 * Implements data fetching and event rendering with proper error handling
 */
function App() {
  // State management
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedEvent, setSelectedEvent] = useState(null)
  const { isAuthenticated } = useAuth()

  // Fetch events on component mount
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('https://api.hackthenorth.com/v3/events')
        if (!response.ok) throw new Error('Failed to fetch events')
        const data = await response.json()
        
        // Sort events by start_time
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

  // Render loading state
  if (loading) {
    return (
      <>
        <Navbar />
        <Container>
          <div role="alert" aria-busy="true" aria-live="polite">
            Loading events...
          </div>
        </Container>
      </>
    )
  }

  // Render error state
  if (error) {
    return (
      <>
        <Navbar />
        <Container>
          <div role="alert" aria-live="assertive">
            {error}
          </div>
        </Container>
      </>
    )
  }

  // Main render
  return (
    <>
      <Navbar />
      <Container>
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
      </Container>
    </>
  )
}

export default App