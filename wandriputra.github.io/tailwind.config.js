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
          bg: '#1e1e1e',          // Editor bg
          sidebar: '#252526',     // Sidebar bg
          activity: '#333333',    // Activity bar bg (far left)
          status: '#007acc',      // Status bar (blue)
          tab: '#2d2d2d',         // Inactive tab
          'tab-active': '#1e1e1e',// Active tab
          border: '#3e3e42',      // Borders
          text: '#d4d4d4',        // Main text
          'text-dim': '#858585',  // Comments/Dim text
          accent: '#0e639c',      // Focus/Selection
          keyword: '#569cd6',     // Blue keyword
          string: '#ce9178',      // Orange string
          func: '#dcdcaa',        // Yellow function
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