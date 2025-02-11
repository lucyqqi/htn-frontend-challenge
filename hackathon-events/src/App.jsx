import { useState, useEffect } from 'react'
import { EventCard } from './components/EventCard'
import { Container, PageHeading } from './styles/theme'
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

  // Fetch events on component mount
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('https://api.hackthenorth.com/v3/events')
        if (!response.ok) throw new Error('Failed to fetch events')
        const data = await response.json()
        setEvents(data)
      } catch (error) {
        console.error('Error fetching events:', error)
        setError('Failed to fetch events. Please try again later.')
      } finally {
        setLoading(false)
      }
    }

    fetchEvents()
  }, [])

  // Render loading state
  if (loading) {
    return (
      <Container>
        <div role="alert" aria-busy="true" aria-live="polite">
          Loading events...
        </div>
      </Container>
    )
  }

  // Render error state
  if (error) {
    return (
      <Container>
        <div role="alert" aria-live="assertive">
          {error}
        </div>
      </Container>
    )
  }

  // Main render
  return (
    <Container>
      <PageHeading>Hackathon Events</PageHeading>
      <div role="list" aria-label="Hackathon events">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </Container>
  )
}

export default App