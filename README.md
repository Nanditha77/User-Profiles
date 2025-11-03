# User Dashboard  

A modern, responsive user dashboard that fetches and displays user data from JSONPlaceholder API with real-time search functionality.  

## Features

 Fetch and display users from JSONPlaceholder API  
 Search users by name or email in real-time   
 Fully responsive (Mobile, Tablet, Desktop)  
 Clean component-based architecture  
 Loading and error states  

## Tech Stack

- React 18
- Tailwind CSS 3
- Lucide React (Icons)
- JSONPlaceholder API  

## My Approach

### 1. Planning & Design
- Analyzed assignment requirements and API structure
- Prepared the design reference image (sky background, cloud shapes, avatar cards)
- Planned a modular component architecture for reusability and maintainability

### 2. Component Architecture
I broke down the UI into **11 reusable components**:

**Main Components:**
- `App.js` - Main app with state management and API logic
- `UserCard.js` - Individual user card combining all elements
- `SearchBar.js` - Search input with result counter

**UI Components:**
- `Avatar.js` - Circular avatar with user initials
- `CloudBackground.js` - Sky blue gradient with cloud shapes
- `UserInfo.js` - User name
- `ContactDetails.js` - Email, phone, company, address

**State Components:**
- `Loading.js` - Loading spinner
- `ErrorDisplay.js` - Error message with retry
- `NoResults.js` - Empty search state  

### 3. Implementation Steps

**State Management:**
- Used React hooks (`useState`, `useEffect`) for managing users, search, loading, and errors

**API Integration:**
- Fetched data using `async/await` with proper error handling
- Implemented loading state for better UX
- Added retry functionality on error

**Search Functionality:**
- Real-time filtering using `useEffect` hook
- Case-insensitive search on name and email
- Instant results without page reload  

## Installation & Setup

### Prerequisites  
- **Node.js** (v14 or higher) 

### Quick Start

**1. Clone the Repository**  

git clone https://github.com/USERNAME/venturelync.git  
cd user-dashboard  


**2. Install Dependencies**

npm install

**3. Start Development Server**

npm start

The application will automatically open in your browser at `http://localhost:3000`

## Build for Production

npm run build  

## Future Improvements

- Dark mode toggle
- Sort and advanced filters
