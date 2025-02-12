import styled from '@emotion/styled'

export const SearchContainer = styled.div`
  margin: 0 auto 2rem;
  max-width: 500px;
  width: 100%;
`

export const SearchInput = styled.input`
  width: 100%;
  padding: 12px 20px;
  border: 2px solid rgba(66, 99, 235, 0.1);
  border-radius: 12px;
  font-size: 1rem;
  background: white;
  color: #9CA3AF;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #4263EB;
    box-shadow: 0 0 0 3px rgba(66, 99, 235, 0.1);
  }

  &::placeholder {
    color: #9CA3AF;
  }
` 