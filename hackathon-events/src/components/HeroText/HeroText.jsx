/**
 * @fileoverview Hero text content component
 * Displays the main headline and subtitle
 */

import { Title, Subtitle } from './HeroText.styles'

/**
 * HeroText component that displays the main text content
 * 
 * @component
 * @example
 * return (
 *   <HeroText />
 * )
 */
export const HeroText = () => {
  return (
    <>
      <Title>Canada's Biggest Hackathon</Title>
      <Subtitle>
        September 13-15, 2025 • MLH Official Member
      </Subtitle>
    </>
  )
} 