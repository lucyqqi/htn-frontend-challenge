/**
 * @fileoverview Styled components for the puzzle-themed floating decorations
 */

import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

/**
 * Animation for floating effect
 * Combines vertical movement with slight rotation
 */
const float = keyframes`
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
`

/**
 * Styled image component with floating animation
 * Uses fixed positioning for consistent placement regardless of scroll
 */
export const FloatingImage = styled.img`
  position: fixed;
  pointer-events: none;
  animation: ${float} 6s ease-in-out infinite;
  z-index: 1;
  opacity: 0.6;
` 