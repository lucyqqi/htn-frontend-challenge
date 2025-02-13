/**
 * @fileoverview Custom hook for event filtering and search functionality
 */

import { useState } from 'react'
import { useAuth } from '../context/AuthContext'

/**
 * Hook to manage event filtering, search, and visibility logic
 * 
 * @param {Array} events - List of all events
 * @returns {Object} Filtering state and handlers
 */
export const useEventFiltering = (events) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeFilter, setActiveFilter] = useState('all')
  const { isAuthenticated } = useAuth()

  const visibleEvents = events.filter(event => {
    // Auth check
    const isVisible = isAuthenticated ? true : event.permission === 'public'
    if (!isVisible) return false
    
    // Event type filter
    if (activeFilter !== 'all' && event.event_type !== activeFilter) return false
    
    // Search query filter
    if (!searchQuery) return true
    
    const searchLower = searchQuery.toLowerCase()
    return (
      event.name.toLowerCase().includes(searchLower) ||
      event.description?.toLowerCase().includes(searchLower) ||
      event.event_type.toLowerCase().includes(searchLower) ||
      event.speakers?.some(speaker => 
        speaker.name.toLowerCase().includes(searchLower)
      )
    )
  })

  return {
    searchQuery,
    setSearchQuery,
    activeFilter,
    setActiveFilter,
    visibleEvents
  }
} 