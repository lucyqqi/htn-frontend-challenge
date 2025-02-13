/**
 * @fileoverview Alternative floating decorations component with puzzle theme
 * Specifically designed for the events page
 */

import { FloatingImage } from './FloatingDecorations2.styles'
import cubeImg from '../../assets/images/cube.png'
import heartImg from '../../assets/images/heart.png'
import lightbulbImg from '../../assets/images/lightbulb.png'
import puzzleImg from '../../assets/images/puzzle.png'

/**
 * FloatingDecorations2 component with puzzle-themed decorative elements
 * 
 * @component
 * @example
 * return (
 *   <FloatingDecorations2 />
 * )
 */
export const FloatingDecorations2 = () => {
  return (
    <>
      {/* Left side floating images */}
      <FloatingImage
        src={cubeImg}
        alt=""
        style={{
          top: '20%',
          left: '10%',
          width: '200px',
          animationDelay: '0s'
        }}
      />
      <FloatingImage
        src={lightbulbImg}
        alt=""
        style={{
          bottom: '10%',
          left: '15%',
          width: '100px',
          animationDelay: '4s'
        }}
      />
      
      {/* Right side floating images */}
      <FloatingImage
        src={heartImg}
        alt=""
        style={{
          top: '25%',
          right: '10%',
          width: '90px',
          animationDelay: '2s'
        }}
      />
      <FloatingImage
        src={puzzleImg}
        alt=""
        style={{
          bottom: '25%',
          right: '15%',
          width: '175px',
          animationDelay: '3s'
        }}
      />
    </>
  )
} 