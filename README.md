# Next.js Portfolio & User Feed Project

This project demonstrates a modern frontend application built with **Next.js** featuring a developer portfolio homepage, real-time location sharing, and an infinite scroll user feed.

---

## Features

### 1. Developer Portfolio Home Page

- Responsive, pixel-perfect UI based on [Figma design](https://www.figma.com/design/5K0twoVnr0hDHe5EoB5jFi/Portfolio?node-id=73-446&p=f)
- Built with Next.js and styled using Tailwind CSS
- Component-based architecture with reusable components (`Button`, `Card`, etc.)
- Dark/Light mode toggle with persistence using `localStorage`
- Mobile-first and accessible with ARIA roles and keyboard navigation
- Smooth animations and page transitions for enhanced UX

### 2. Real-Time Location Sharing

- Real-time bi-directional location updates using SignalR WebSocket client
- Two interfaces:
  - User A: Sends live or simulated GPS coordinates
  - User B: Receives and displays updates on a Leaflet map
- SignalR connection logic encapsulated in a custom React hook (`useSignalR`)
- SignalR Hub URL: `https://tech-test.raintor.com/Hub`
- SignalR methods used:
  - `SendLatLon(lat, lon, userName)`
  - `ReceiveLatLon` event listener for location updates

### 3. Infinite Scroll User Feed

- Scrollable, paginated user list with infinite scroll using React Query
- Modular `<UserCard />` component to display user details
- Skeleton loaders while fetching data for better UX
- Error boundaries and fallback UI for robust error handling
- Prepared for virtualization with libraries like `react-window` for large datasets
- Keyboard accessible and ARIA-compliant UI
- API Endpoint: `https://tech-test.raintor.com/api/users/GetUsersList?take=10&skip=0`

---

## Getting Started

### Prerequisites

- Node.js v16 or higher
- npm or yarn package manager

### Installation

```bash
git clone <your-repository-url>
cd <project-folder>
npm install



Running Tests
This project uses Jest and React Testing Library for unit and integration tests.

To run tests:

bash
Copy
Edit
npm test

# or

yarn test
```

Additional Notes
Theme preference (dark/light) is saved to localStorage and loaded on app start.

SignalR connections handle reconnections and cleanup on unmount.

Infinite scroll leverages Intersection Observer API for efficient pagination.

Accessibility features include proper ARIA roles and keyboard navigation.

Animations and transitions improve UI responsiveness and interactivity.
