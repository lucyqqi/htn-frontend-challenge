import styled from '@emotion/styled'

const HomeContainer = styled.div`
  padding-top: 100px;
  text-align: center;
`

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
`

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
  opacity: 0.8;
`

export const Home = () => {
  return (
    <HomeContainer>
      <Title>Hack The North</Title>
      <Description>
        Welcome to Canada's biggest hackathon! Join thousands of students from around the world for 36 hours of learning, building, and innovation. Whether you're a first-time hacker or a hackathon veteran, Hack The North is the perfect place to collaborate with other passionate individuals and turn your ideas into reality.
      </Description>
      <Description style={{ marginTop: '2rem' }}>
        Connect with fellow hackers, learn from industry experts, and create something amazing. With workshops, mentorship, and amazing prizes, you'll have everything you need to bring your ideas to life.
      </Description>
    </HomeContainer>
  )
} 