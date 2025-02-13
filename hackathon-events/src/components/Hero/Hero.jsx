/**
 * @fileoverview Hero component for the landing page
 * Displays the main headline, subtitle, and decorative elements
 */

import { Features } from '../Features/Features'
import { FloatingDecorations } from '../FloatingDecorations/FloatingDecorations'
import {
  HeroContainer,
  ContentWrapper,
  Title,
  Subtitle
} from './Hero.styles'

/**
 * Hero component that serves as the main landing section
 * Combines headline, subtitle, and feature highlights
 * 
 * @component
 * @example
 * return (
 *   <Hero />
 * )
 */
export const Hero = () => {
  return (
    <HeroContainer>
      <FloatingDecorations />
      <ContentWrapper>
        <Title>Canada's Biggest Hackathon</Title>
        <Subtitle>
          September 13-15, 2025 • MLH Official Member
        </Subtitle>
        <Features />
      </ContentWrapper>
    </HeroContainer>
  )
} 