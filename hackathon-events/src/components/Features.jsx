import styled from '@emotion/styled'
import { Users, MapPin, Calendar } from 'lucide-react'

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
  padding: 2rem;
`

const FeatureCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  transition: background-color 0.3s;
  
  &:hover {
    background: rgba(255, 255, 255, 0.8);
  }
`

const IconWrapper = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  background: ${props => {
    switch (props.type) {
      case 'primary': return 'rgba(66, 99, 235, 0.1)';
      case 'secondary': return 'rgba(124, 58, 237, 0.1)';
      case 'accent': return 'rgba(244, 114, 182, 0.1)';
      default: return 'rgba(66, 99, 235, 0.1)';
    }
  }};

  svg {
    width: 1.5rem;
    height: 1.5rem;
    color: ${props => {
      switch (props.type) {
        case 'primary': return '#4263EB';
        case 'secondary': return '#7C3AED';
        case 'accent': return '#F472B6';
        default: return '#4263EB';
      }
    }};
  }
`

const FeatureTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  text-align: center;
  color: #1a1a1a;
`

const FeatureText = styled.p`
  color: #666;
  text-align: center;
  line-height: 1.6;
`

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