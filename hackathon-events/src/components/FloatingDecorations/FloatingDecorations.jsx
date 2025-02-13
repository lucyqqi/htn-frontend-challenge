/**
 * @fileoverview FloatingDecorations component that adds animated decorative elements
 */

import planeImg from '../../assets/images/plane.png'
import butterflyImg from '../../assets/images/butterfly.png'
import bubbleImg from '../../assets/images/bubble.png'
import { FloatingImage } from './FloatingDecorations.styles'

/**
 * Configuration for decorative elements including position, size, and animation timing
 */
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

/**
 * FloatingDecorations component renders animated decorative images
 * that float in the background of the page
 * 
 * @component
 * @example
 * return (
 *   <FloatingDecorations />
 * )
 */
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