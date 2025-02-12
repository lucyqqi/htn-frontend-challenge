import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import { EventCard } from '../components/EventCard'
import { EventDetails } from '../components/EventDetails'
import { useAuth } from '../context/AuthContext'
import cubeImg from '../assets/images/cube.png'
import heartImg from '../assets/images/heart.png'
import lightbulbImg from '../assets/images/lightbulb.png'
import puzzleImg from '../assets/images/puzzle.png'

const float = keyframes`
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
`

const EventsContainer = styled.div`
  min-height: 100vh;
  background: #FDF6F0;
  position: relative;
  overflow: hidden;
  padding-top: 100px;
`

const ContentWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  position: relative;
  z-index: 2;
`

const Title = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  text-align: center;
  margin-bottom: 2rem;
  background: linear-gradient(135deg, #4263EB, #7C3AED, #F472B6);
  -webkit-background-clip: text;
  color: transparent;
`

const EventsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  position: relative;
`

const FloatingImage = styled.img`
  position: fixed;
  pointer-events: none;
  animation: ${float} 6s ease-in-out infinite;
  z-index: 1;
  opacity: 0.6;
`

const LoadingText = styled.div`
  text-align: center;
  color: #4263EB;
  font-size: 1.2rem;
  margin-top: 2rem;
`

const ErrorText = styled.div`
  text-align: center;
  color: #EF4444;
  font-size: 1.2rem;
  margin-top: 2rem;
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

  return (
    <EventsContainer>
      {/* Left side floating images */}
      <FloatingImage
        src={cubeImg}
        alt=""
        style={{
          top: '20%',
          left: '10%',
          width: '80px',
          animationDelay: '0s'
        }}
      />
      <FloatingImage
        src={lightbulbImg}
        alt=""
        style={{
          bottom: '30%',
          left: '15%',
          width: '60px',
          animationDelay: '4s'
        }}
      />
      
      {/* Right side floating images */}
      <FloatingImage
        src={heartImg}
        alt=""
        style={{
          top: '25%',
          right: '10%',
          width: '70px',
          animationDelay: '2s'
        }}
      />
      <FloatingImage
        src={puzzleImg}
        alt=""
        style={{
          bottom: '25%',
          right: '15%',
          width: '75px',
          animationDelay: '3s'
        }}
      />

      <ContentWrapper>
        <Title>Hackathon Events</Title>
        
        {loading ? (
          <LoadingText role="alert" aria-busy="true">
            Loading events...
          </LoadingText>
        ) : error ? (
          <ErrorText role="alert">
            {error}
          </ErrorText>
        ) : selectedEvent ? (
          <EventDetails 
            event={selectedEvent}
            onBack={() => setSelectedEvent(null)}
            onSelectEvent={setSelectedEvent}
            allEvents={events}
          />
        ) : (
          <EventsList role="list" aria-label="Hackathon events">
            {visibleEvents.map((event) => (
              <EventCard 
                key={event.id} 
                event={event}
                onClick={() => setSelectedEvent(event)}
              />
            ))}
          </EventsList>
        )}
      </ContentWrapper>
    </EventsContainer>
  )
} 