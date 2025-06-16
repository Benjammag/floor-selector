# Mini Real Estate Floor Selector

This is a lightweight interactive app designed to simulate a basic real estate floor selection experience. Users can explore multiple towers, select a floor, and preview apartment layouts with a simple and intuitive interface.

## What It Does

- Lets users choose from three tower buildings (Tower A, B, and C)
- Displays a list of floors within each tower
- Shows a selection of apartment layouts per floor, each with a thumbnail and key details
- Allows users to click into a layout to view more detailed information

## Highlights

- Step-by-step navigation from tower → floor → apartment
- Clean and responsive design using Tailwind CSS
- Hover interactions to enhance the user experience (on desktop)
- Strictly typed with TypeScript for better reliability and developer experience

## Stack & Tools

- **React** – For building the UI
- **TypeScript** – For static typing and improved maintainability
- **Tailwind CSS** – For fast, utility-based styling
- **Framer Motion** – (Optional) Adds smooth scaling animations to apartment cards
- **Lucide-react** – For icons used in the interface

## Considerations & Limitations

- All data is hardcoded (no API/backend)
- App state is stored in memory only – refreshing resets progress
- Routing isn't implemented – navigation is controlled via component state
- Hover effects are subtle on mobile devices and could be optimized further
- Accessibility features are minimal and can be improved for a production-ready version

## Getting Started

1. Clone the repo:
   ```bash
   git clone https://github.com/yourusername/mini-floor-selector.git
   cd mini-floor-selector
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Launch the development server:
   ```bash
   npm run dev
   ```
   
## Deployment

You can easily deploy this app using services like [Vercel](https://vercel.com) or [Netlify](https://netlify.com). Just connect your GitHub repo and follow the prompts.

This project is a solid starting point for building out a more complex real estate browsing experience. You could extend it with dynamic data, authentication, filters, maps, or a full backend later on.
