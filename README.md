# Hack the North 2025 Frontend Challenge

[View Live Demo](https://htn-frontend-challenge-one.vercel.app/)

## 1. Development Process

I started this project by thinking from the user perspective: I sketched some initial designs in Procreate and taking some inspiration from the 2024 Hack the North website styling and Notion components, I had a plan! 

#### Planning & Structure

I broke everything down into reusable components, each with its own folder containing the component file and its styles. This separation made it easier to maintain and update specific parts of the application. For example, when I needed to update the event card design, I could focus just on the EventCard folder without touching other components. I might want to put the event components in a folder called events alter when this application scales up for better organization, but for now I kept it as is.

The utils folder contains helper functions like date formatting and constants, while the hooks folder has custom hooks for data fetching and event filtering. I tried following best practices, so when I needed to fix something, I knew where to look. 

#### Tech Stack

I chose React + Vite for the tech stack because it's a popular and performant framework for building modern web applications. Emotion was chosen for its powerful styling capabilities and the ability to write CSS in JavaScript. React Router was used for navigation between pages, and Javascript was just something I was comfortable with.

#### Challenges & Solutions

1. **Authentication Flow**
   - Initially struggled with authentication implementation. First tried hard-coding username/password with a basic login form, but the UI looked inconsistent with the rest of the application and wasn't secure
   - Attempted to implement Auth0, but ran into configuration issues with callbacks and redirects
   - Finally settled on Firebase Authentication because it provided a clean UI, was easy to set up with Google sign-in, and had good documentation
   - Used local storage to persist the auth state, preventing users from having to log in again after page refreshes

2. **Event Filtering**
   - Had issues with the search functionality initially returning incorrect results because I was filtering after sorting
   - Solved this by creating a custom useEventFiltering hook that handles both operations in the correct order
   - Added debouncing to prevent excessive API calls when users type quickly
   - Created separate filters for event types and search terms to make the logic cleaner

3. **Responsive Design**
   - The navbar was particularly challenging - initially, it would break on mobile screens and the search bar would overflow
   - Solved this by implementing a collapsible mobile menu with a hamburger icon
   - Used media queries to target specific screen sizes:
     ```css
     @media (max-width: 768px) {
       // Mobile styles
     }
     @media (min-width: 769px) and (max-width: 1024px) {
       // Tablet styles
     }
     ```
   - Made the search bar responsive by using relative units and flex-wrap
   - Added smooth transitions for the mobile menu to improve the user experience

#### Code I'm Proud Of
I'm particularly proud of the visual elements I incorporated this time around. I enjoyed trying something new with a light mode theme instead of my usual dark gradients, and I think the floating 3D decorations were a nice touch. I'm also proud of how I organized the events this year, as the layout is clean and visually appealing.

## 2. Future Extensions

If I had more time, I'd love to add:

1. **User Experience Improvements**
   - Event favoriting system
   - Calendar integration
   - Personal schedule builder
   - Better loading states

2. **Technical Improvements**
   - Migrate to TypeScript for better type safety and developer experience (for some reason was too deep into this project to realize this)
   - Implement React Query for better data handling
   - Add loading skeletons
   - Optimize images and assets
   - Add comprehensive testing with React Testing Library

3. **Additional Features**
   - Event registration system
   - User profiles
   - Social sharing
   - Real-time updates with WebSocket integration
   - Calendar export functionality

### 3. Additional Thoughts

Looking back at my previous frontend challenge ([last year's submission](https://htn-frontend-awn7.vercel.app/)), I think hopefully this year's is better. This time around, I focused on not just making things work, but making them work well. The documentation is much more comprehensive, the UI is more polished, and I managed to get more of the core features working robustly. While I know I still have lots to learn, I'm pretty happy with how I've grown!
