/**
 * @fileoverview Custom hook for filtering hackathon events
 * Provides search and category filtering functionality with authentication checks
 */

import { useState } from 'react'
import { useAuth } from '../context/AuthContext'

/**
 * Custom hook to manage event filtering logic
 * 
 * @param {Array} events - Array of event objects to filter
 * @returns {Object} Filtering state and handlers
 * @property {string} searchQuery - Current search term
 * @property {Function} setSearchQuery - Search term update handler
 * @property {string} activeFilter - Current category filter
 * @property {Function} setActiveFilter - Category filter update handler
 * @property {Array} visibleEvents - Filtered events based on current criteria
 * 
 * @example
 * const { 
 *   searchQuery, 
 *   setSearchQuery, 
 *   activeFilter, 
 *   setActiveFilter,
 *   visibleEvents 
 * } = useEventFiltering(events)
 */
export const useEventFiltering = (events) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeFilter, setActiveFilter] = useState('all')
  const { isAuthenticated } = useAuth()

  /**
   * Filters events based on multiple criteria:
   * 1. Authentication status (public/private events)
   * 2. Event type/category
   * 3. Search term matching name, description, type, or speakers
   */
  const visibleEvents = events?.filter(event => {
    // Authentication check
    const isVisible = isAuthenticated ? true : event.permission === 'public'
    if (!isVisible) return false
    
    // Category filter
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