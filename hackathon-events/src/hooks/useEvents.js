/**
 * @fileoverview Custom hook for fetching and managing hackathon events data
 * Handles data fetching, loading states, and error management
 */

import { useState, useEffect } from 'react'

/**
 * Custom hook to manage the fetching and state of hackathon events
 * 
 * @returns {Object} The events data and state handlers
 * @property {Array} events - Array of fetched event objects
 * @property {boolean} loading - Loading state indicator
 * @property {string|null} error - Error message if fetch fails
 * @property {Object|null} selectedEvent - Currently selected event
 * @property {Function} setSelectedEvent - Handler to update selected event
 * 
 * @example
 * const { events, loading, error, selectedEvent, setSelectedEvent } = useEvents()
 * 
 * if (loading) return <LoadingSpinner />
 * if (error) return <ErrorMessage message={error} />
 */
export const useEvents = () => {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedEvent, setSelectedEvent] = useState(null)

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('https://api.hackthenorth.com/v3/events')
        if (!response.ok) throw new Error('Failed to fetch events')
        const data = await response.json()
        
        // Sort events chronologically by start time
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

  return {
    events,
    loading,
    error,
    selectedEvent,
    setSelectedEvent
  }
} 