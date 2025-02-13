/**
 * @fileoverview Styled components for the events list
 * Implements layout and styling for the event cards container and error messaging
 */

import styled from '@emotion/styled'

/**
 * Container component for the list of event cards
 */
export const EventsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  position: relative;
`

/**
 * Error message component for empty states
 */
export const ErrorText = styled.div`
  text-align: center;
  color: #4263EB;
  font-size: 1.2rem;
  margin-top: 2rem;
` 