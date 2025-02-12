import { SearchInput, SearchContainer } from './SearchBar.styles'

/**
 * SearchBar component for filtering events
 * @param {Object} props
 * @param {string} props.value - Current search value
 * @param {Function} props.onChange - Handler for search input changes
 */
export const SearchBar = ({ value, onChange }) => {
  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="Search events..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label="Search events"
      />
    </SearchContainer>
  )
} 