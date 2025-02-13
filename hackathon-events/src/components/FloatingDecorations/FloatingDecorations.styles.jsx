/**
 * @fileoverview Styled components for FloatingDecorations
 * Implements floating animation and positioning for decorative elements
 */

import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

/**
 * Keyframe animation for floating effect
 * Creates a gentle up and down motion with slight rotation
 */
const float = keyframes`
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
`

/**
 * Styled image component with floating animation
 * Positioned absolutely and ignores pointer events
 * 
 * Features:
 * - Absolute positioning
 * - Infinite floating animation
 * - Smooth transitions
 * - No pointer events to prevent interference with underlying elements
 * - Z-index to ensure proper layering
 */
export const FloatingImage = styled.img`
  position: absolute;
  pointer-events: none;
  animation: ${float} 6s ease-in-out infinite;
  z-index: 1;
`