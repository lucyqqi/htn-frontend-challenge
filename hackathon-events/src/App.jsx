import { useState, useEffect } from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`

const EventCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  margin: 10px 0;
  background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`

function App() {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('https://api.hackthenorth.com/v3/events')
        const data = await response.json()
        setEvents(data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching events:', error)
        setError('Failed to fetch events')
        setLoading(false)
      }
    }

    fetchEvents()
  }, [])

  if (loading) return <div>Loading...</div>
  if (error) return <div>{error}</div>

  return (
    <Container>
      <h1>Hackathon Events</h1>
      {events.map((event) => (
        <EventCard key={event.id}>
          <h2>{event.name}</h2>
          <p>Type: {event.event_type}</p>
          <p>Time: {new Date(event.start_time).toLocaleString()}</p>
          {event.description && <p>{event.description}</p>}
          {event.speakers.length > 0 && (
            <p>Speakers: {event.speakers.map(speaker => speaker.name).join(', ')}</p>
          )}
        </EventCard>
      ))}
    </Container>
  )
}

export default App