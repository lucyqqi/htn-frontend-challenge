import { FilterContainer, FilterButton } from './FilterBar.styles'

const EVENT_TYPES = [
  { id: 'all', label: 'All Events' },
  { id: 'tech_talk', label: 'Tech Talks' },
  { id: 'workshop', label: 'Workshops' },
  { id: 'activity', label: 'Activities' }
]

/**
 * FilterBar component for filtering events by type
 * @param {Object} props
 * @param {string} props.activeFilter - Currently selected filter
 * @param {Function} props.onFilterChange - Handler for filter changes
 */
export const FilterBar = ({ activeFilter, onFilterChange }) => {
  return (
    <FilterContainer>
      {EVENT_TYPES.map(({ id, label }) => (
        <FilterButton
          key={id}
          isActive={activeFilter === id}
          onClick={() => onFilterChange(id)}
          type="button"
          aria-pressed={activeFilter === id}
        >
          {label}
        </FilterButton>
      ))}
    </FilterContainer>
  )
} 