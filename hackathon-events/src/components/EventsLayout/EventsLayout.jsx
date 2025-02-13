/**
 * @fileoverview Layout component for the events page
 */

import { FloatingDecorations2 } from '../FloatingDecorations2/FloatingDecorations2'
import {
  EventsContainer,
  ContentWrapper,
  Title
} from './EventsLayout.styles'

export const EventsLayout = ({ children }) => {
  return (
    <EventsContainer>
      <FloatingDecorations2 />
      <ContentWrapper>
        <Title>Hackathon Events</Title>
        {children}
      </ContentWrapper>
    </EventsContainer>
  )
} 