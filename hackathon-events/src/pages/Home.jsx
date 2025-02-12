import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import planeImg from '../assets/images/plane.png'
import butterflyImg from '../assets/images/butterfly.png'
import bubbleImg from '../assets/images/bubble.png'
import { Users, MapPin, Calendar } from 'lucide-react'

const float = keyframes`
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
`

const HomeContainer = styled.div`
  min-height: 100vh;
  background: #FDF6F0;
  position: relative;
  overflow: hidden;
  padding-top: 80px;
`

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 8rem 2rem 4rem;
  text-align: center;
  position: relative;
  z-index: 2;
`

const Title = styled.h1`
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: bold;
  background: linear-gradient(135deg, #4263EB, #7C3AED, #F472B6);
  -webkit-background-clip: text;
  color: transparent;
  margin-bottom: 1.5rem;
`

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #666;
  max-width: 800px;
  margin: 0 auto;
`

const FloatingImage = styled.img`
  position: absolute;
  pointer-events: none;
  animation: ${float} 6s ease-in-out infinite;
  z-index: 1;
`

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

export const Home = () => {
  return (
    <HomeContainer>
      <FloatingImage
        src={planeImg}
        alt=""
        style={{
          top: '15%',
          left: '5%',
          width: '120px',
          animationDelay: '0s'
        }}
      />
      <FloatingImage
        src={butterflyImg}
        alt=""
        style={{
          top: '30%',
          right: '15%',
          width: '100px',
          animationDelay: '2s'
        }}
      />
      <FloatingImage
        src={bubbleImg}
        alt=""
        style={{
          top: '50%',
          left: '20%',
          width: '120px',
          animationDelay: '4s'
        }}
      />

      <ContentWrapper>
        <Title>Canada's Biggest Hackathon</Title>
        <Subtitle>
          September 13-15, 2025 • MLH Official Member
        </Subtitle>

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
      </ContentWrapper>
    </HomeContainer>
  )
} 