/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vscode: {
          bg: '#ffffff',          // Editor bg (White)
          sidebar: '#f3f3f3',     // Sidebar bg (Light Gray)
          activity: '#2c2c2c',    // Activity bar bg (Dark for contrast in light theme)
          status: '#007acc',      // Status bar (Stay blue)
          tab: '#ececec',         // Inactive tab
          'tab-active': '#ffffff',// Active tab
          border: '#e5e5e5',      // Borders
          text: '#333333',        // Main text (Dark Gray)
          'text-dim': '#616161',  // Comments/Dim text
          accent: '#007acc',      // Focus/Selection
          keyword: '#0000ff',     // Blue keyword
          string: '#a31515',      // Deep red string
          func: '#795e26',        // Brown function
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"Fira Code"', 'Menlo', 'Monaco', 'Courier New', 'monospace'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}