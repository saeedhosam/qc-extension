# QC - Airline Ticketing Quality Check Extension

A Chrome extension built with React, TypeScript, Vite, and Tailwind CSS for quality checking airline ticketing tasks.

## Features

- Modern React components with TypeScript
- Tailwind CSS for styling
- Vite for fast development and building
- Chrome extension side panel functionality
- Interactive checklist with tooltips
- Category switching between different QC types

## Development

### Prerequisites

- Node.js (version 16 or higher)
- npm

### Setup

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

### Chrome Extension Installation

1. Build the extension:
```bash
npm run build
```

2. Open Chrome and go to `chrome://extensions/`

3. Enable "Developer mode" in the top right

4. Click "Load unpacked" and select the `dist` folder

5. The extension should now appear in your Chrome toolbar

## Project Structure

```
src/
├── components/          # React components
│   ├── CategorySelector.tsx
│   ├── ChecklistItem.tsx
│   └── Tooltip.tsx
├── types/              # TypeScript type definitions
│   └── index.ts
├── App.tsx             # Main React component
├── data.ts             # Checklist data
├── main.tsx            # React entry point
├── popup.html          # Extension popup HTML
├── background.ts       # Chrome extension background script
└── index.css           # Styles with Tailwind CSS
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run type-check` - Run TypeScript type checking

## Technologies Used

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Chrome Extensions API** - Browser extension functionality
