# User Dashboard  

A modern, responsive user dashboard that fetches and displays user data from JSONPlaceholder API with real-time search functionality.

---

## Features

 Fetch and display users from JSONPlaceholder API  
 Search users by name or email in real-time   
 Fully responsive (Mobile, Tablet, Desktop)  
 Clean component-based architecture  
 Loading and error states  

---

## Tech Stack

- React 18
- Tailwind CSS 3
- Lucide React (Icons)
- JSONPlaceholder API

---

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

**Design Recreation:**
- Created cloud effect using overlapping rounded divs with different opacities
- Avatar overlaps background using negative margin (`-mt-16`)
- Generated consistent avatar colors using `userId % 8`
- Made responsive grid: 1 column (mobile), 2 columns (tablet), 3 columns (desktop)

```

---

## 🚀 Setup & Run

### Prerequisites
- Node.js (v14+)
- npm

### Installation

**1. Create React App**

npx create-react-app venturelync
cd venturelync
```

**2. Install Dependencies**

npm install lucide-react
npm install -D tailwindcss postcss autoprefixer
```

**3. Initialize Tailwind**
```bash
npx tailwindcss init -p
```

**4. Configure Tailwind**

Create/update `tailwind.config.js`:
```javascript
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: { extend: {} },
  plugins: [],
}
```

Update `src/index.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**5. Create Components**

Create folder: `src/components/`

Copy all component files:
- Avatar.js
- CloudBackground.js
- ContactDetails.js
- ErrorDisplay.js
- Loading.js
- NoResults.js
- SearchBar.js
- Stats.js
- UserCard.js
- UserInfo.js

**6. Update App.js**

Replace `src/App.js` with the main application code.

**7. Run Application**
```bash
npm start
```

Open `http://localhost:3000` in your browser.

---

## 📁 Project Structure
```
user-dashboard/
├── src/
│   ├── components/
│   │   ├── Avatar.js
│   │   ├── CloudBackground.js
│   │   ├── ContactDetails.js
│   │   ├── ErrorDisplay.js
│   │   ├── Loading.js
│   │   ├── NoResults.js
│   │   ├── SearchBar.js
│   │   ├── Stats.js
│   │   ├── UserCard.js
│   │   └── UserInfo.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── tailwind.config.js
├── package.json
└── README.me

---

## Future Improvements

- Dark mode toggle
- Sort and advanced filters


---

**Thank you for reviewing!** This project demonstrates my ability to build modern, responsive React applications with clean code and component-based architecture.
