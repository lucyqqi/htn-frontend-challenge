import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import planeImg from '../assets/images/plane.png'
import butterflyImg from '../assets/images/butterfly.png'
import bubbleImg from '../assets/images/bubble.png'

const float = keyframes`
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
`

const FloatingImage = styled.img`
  position: absolute;
  pointer-events: none;
  animation: ${float} 6s ease-in-out infinite;
  z-index: 1;
`

const decorations = [
  {
    src: planeImg,
    style: {
      top: '15%',
      left: '5%',
      width: '120px',
      animationDelay: '0s'
    }
  },
  {
    src: butterflyImg,
    style: {
      top: '30%',
      right: '15%',
      width: '100px',
      animationDelay: '2s'
    }
  },
  {
    src: bubbleImg,
    style: {
      top: '40%',
      left: '20%',
      width: '120px',
      animationDelay: '4s'
    }
  }
]

export const FloatingDecorations = () => {
  return (
    <>
      {decorations.map((decoration, index) => (
        <FloatingImage
          key={`decoration-${index}`}
          src={decoration.src}
          alt=""
          style={decoration.style}
        />
      ))}
    </>
  )
} 