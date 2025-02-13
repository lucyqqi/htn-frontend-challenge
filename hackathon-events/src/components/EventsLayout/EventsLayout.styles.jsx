/**
 * @fileoverview Styled components for the events page layout
 */

import styled from '@emotion/styled'

export const EventsContainer = styled.div`
  min-height: 100vh;
  background: #FDF6F0;
  position: relative;
  overflow: hidden;
  padding-top: 100px;
`

export const ContentWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  position: relative;
  z-index: 2;
`

export const Title = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  text-align: center;
  margin-bottom: 2rem;
  background: linear-gradient(135deg, #4263EB, #7C3AED, #F472B6);
  -webkit-background-clip: text;
  color: transparent;
` 