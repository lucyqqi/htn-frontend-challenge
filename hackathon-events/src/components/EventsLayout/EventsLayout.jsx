/**
 * @fileoverview Layout component for the events page
 */

import { FloatingDecorations2 } from '../FloatingDecorations2/FloatingDecorations2'
import {
  EventsContainer,
  ContentWrapper,
  Title
} from './EventsLayout.styles'

/**
 * EventsLayout component that provides a layout for the events page
 * 
 * @component
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Child components to render inside the layout
 * */
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