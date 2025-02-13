import styled from '@emotion/styled'
import { Features } from '../components/Features/Features'
import { FloatingDecorations } from '../components/FloatingDecorations'

const HomeContainer = styled.div`
  min-height: 100vh;
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

export const Home = () => {
  return (
    <HomeContainer>
      <FloatingDecorations />
      <ContentWrapper>
        <Title>Canada's Biggest Hackathon</Title>
        <Subtitle>
          September 13-15, 2025 • MLH Official Member
        </Subtitle>
        <Features />
      </ContentWrapper>
    </HomeContainer>
  )
} 