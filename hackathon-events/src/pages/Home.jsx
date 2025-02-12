import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import planeImg from '../assets/images/plane.png'
import butterflyImg from '../assets/images/butterfly.png'
import bubbleImg from '../assets/images/bubble.png'

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
  padding: 4rem 2rem;
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
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #4263EB;
  }
  
  p {
    color: #666;
  }
`

export const Home = () => {
  return (
    <HomeContainer>
      <FloatingImage
        src={planeImg}
        alt=""
        style={{
          top: '15%',
          left: '10%',
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
          bottom: '20%',
          left: '20%',
          width: '80px',
          animationDelay: '4s'
        }}
      />

      <ContentWrapper>
        <Title>Canada's Biggest Hackathon</Title>
        <Subtitle>
          September 13-15, 2024 • In-person event • MLH Official Member
        </Subtitle>

        <FeaturesGrid>
          <FeatureCard>
            <h3>1000+ Hackers</h3>
            <p>Join brilliant minds from around the world for 36 hours of creation, innovation, and fun.</p>
          </FeatureCard>
          <FeatureCard>
            <h3>In-Person Event</h3>
            <p>Experience the energy of in-person collaboration at University of Waterloo.</p>
          </FeatureCard>
          <FeatureCard>
            <h3>36 Hours</h3>
            <p>Turn your ideas into reality with workshops, mentorship, and amazing prizes.</p>
          </FeatureCard>
        </FeaturesGrid>
      </ContentWrapper>
    </HomeContainer>
  )
} 