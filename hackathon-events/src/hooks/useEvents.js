import { useState, useEffect, useCallback } from 'react'

export const useEvents = () => {
  const [events, setEvents] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedType, setSelectedType] = useState('')
  const [selectedEvent, setSelectedEvent] = useState(null)

  // Fetch events
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        // Your event fetching logic here
        setEvents(data)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    fetchEvents()
  }, [])

  // Filter events based on search and type
  const filteredEvents = useCallback(() => {
    return events?.filter(event => {
      const matchesSearch = event.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
      const matchesType = !selectedType || event.event_type === selectedType

      return matchesSearch && matchesType
    })
  }, [events, searchTerm, selectedType])

  return {
    events,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    selectedType,
    setSelectedType,
    selectedEvent,
    setSelectedEvent,
    filteredEvents: filteredEvents()
  }
} 