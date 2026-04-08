# Interactive Wall Calendar Component

A premium, physically-styled React calendar component featuring a 3D page-flip experience, per-month notes, and a sleek, permanent dark-mode aesthetic.

![Interactive Calendar Preview](https://github.com/arpit6026/Interactive-Calender-Component/raw/main/public/preview.png) *(Note: Add your own preview image here)*

## 🌟 Key Features

- 🎭 **3D Page-Flip Animation**: Smooth transitions between months mimicking a real physical wall calendar.
- 🌙 **Premium Dark Theme**: Masterfully crafted dark UI with vibrant, month-specific color palettes.
- 🖼️ **Dynamic Hero Visuals**: Themed background imagery and elegant gradient overlays for every month.
- 📓 **Per-Month Notes**: Independent notepad for each month to keep your planning organized.
- 📍 **Day-Specific Notes**: Click any date to add a personal note, marked with a glowing indicator.
- 🗓️ **Date Range Selection**: Easily select and highlight a range of dates for planning.
- 📤 **Export Capabilities**: Instantly export your selected date range with an integrated toast notification.
- 🎡 **Spiral Binding**: Realistic decorative metal spiral at the top for an authentic look and feel.
- 🏷️ **Holiday Awareness**: Built-in holiday indicators for major recursive celebrations.

## 🚀 Tech Stack

- **React 18** + **Vite**
- **Tailwind CSS** (for layout and utility styling)
- **Vanilla CSS** (for complex 3D transforms and glassy effects)
- **Framer Motion** (conceptually mirrored in CSS animations)
- **Inter** & **Great Vibes** typography

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/arpit6026/Interactive-Calender-Component.git
   cd Interactive-Calender-Component
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run in development:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## 🛠️ Components

- `Calendar.jsx`: The orchestrator component managing state and layout.
- `CalendarGrid.jsx`: Handles the rendering of the day headers and the 6-week grid.
- `DayCell.jsx`: Individual interactive day component with tooltips and indicators.
- `HeroImage.jsx`: The visual centerpiece with themed overlays.
- `NotesPanel.jsx`: The per-month journaling area with ruled-line styling.
- `MonthNav.jsx`: Elegant navigation controls and typography.
- `SpiralBinding.jsx`: Decorative SVG/CSS component for the realism.

## 🎨 Themes

The calendar cycles through 12 unique themes defined in `src/utils/date.js`, each adjusting:
- `primary`: The accent color for navigation, highlights, and headers.
- `heroBg`: The background color for the image container.
- `bgImage`: A subtle decorative background pattern/image for the grid area.

---
Built with ❤️ by [Arpit Saxena](https://github.com/arpit6026)
