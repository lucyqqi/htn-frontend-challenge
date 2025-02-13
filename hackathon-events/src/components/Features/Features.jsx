/**
 * @fileoverview Features component showcasing main hackathon highlights
 * Displays key information about the event using cards with icons
 */

import { Users, MapPin, Calendar } from 'lucide-react'
import {
  FeaturesGrid,
  FeatureCard,
  IconWrapper,
  FeatureTitle,
  FeatureText
} from './Features.styles'

/**
 * Features component that displays the main features of the hackathon
 * 
 * @component
 * @example
 * return (
 *   <Features />
 * )
 */
export const Features = () => {
  return (
    <FeaturesGrid>
      <FeatureCard>
        <IconWrapper type="primary">
          <Users />
        </IconWrapper>
        <FeatureTitle>1000+ Hackers</FeatureTitle>
        <FeatureText>
          Join brilliant minds from around the world for 36 hours of creation, innovation, and fun.
        </FeatureText>
      </FeatureCard>

      <FeatureCard>
        <IconWrapper type="secondary">
          <MapPin />
        </IconWrapper>
        <FeatureTitle>In-Person Event</FeatureTitle>
        <FeatureText>
          Experience the energy of in-person collaboration at University of Waterloo.
        </FeatureText>
      </FeatureCard>

      <FeatureCard>
        <IconWrapper type="accent">
          <Calendar />
        </IconWrapper>
        <FeatureTitle>36 Hours</FeatureTitle>
        <FeatureText>
          Turn your ideas into reality with workshops, mentorship, and amazing prizes.
        </FeatureText>
      </FeatureCard>
    </FeaturesGrid>
  )
} 