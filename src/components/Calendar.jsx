import { useState, useEffect } from 'react';
import HeroImage from './HeroImage';
import MonthNav from './MonthNav';
import CalendarGrid from './CalendarGrid';
import NotesPanel from './NotesPanel';
import SpiralBinding from './SpiralBinding';
import { MONTH_IMAGES, MONTH_NAMES, MONTH_THEMES } from '../utils/date';

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [direction, setDirection] = useState('next');
  
  // Date Range state
  const [selectionRange, setSelectionRange] = useState({ start: null, end: null });
  const [hoverDate, setHoverDate] = useState(null);
  const [notification, setNotification] = useState(null);
  
  const showNotification = (msg) => {
    // Clear first so React always detects a state change, even for identical messages
    setNotification(null);
    requestAnimationFrame(() => {
      setNotification(msg);
      setTimeout(() => setNotification(null), 3500);
    });
  };
  
  // Notes state. Dictionary mapping 'YYYY-MM-DD' or 'general-YYYY-MM' to string notes
  const [notes, setNotes] = useState({});

  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentTheme = MONTH_THEMES[currentMonth];

  // Body background
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.body.style.backgroundColor = '#080e1a';
  }, [currentTheme]);

  // Handlers
  const handlePrevMonth = () => {
    setDirection('prev');
    setCurrentDate(new Date(currentYear, currentMonth - 1, 1));
  };

  const handleNextMonth = () => {
    setDirection('next');
    setCurrentDate(new Date(currentYear, currentMonth + 1, 1));
  };

  const handleDayClick = (dateStr) => {
    if (!selectionRange.start || (selectionRange.start && selectionRange.end)) {
      setSelectionRange({ start: dateStr, end: null });
      setHoverDate(null);
    } else {
      if (selectionRange.start === dateStr) {
        setSelectionRange({ start: null, end: null });
        setHoverDate(null);
      } else {
        setSelectionRange({ ...selectionRange, end: dateStr });
        setHoverDate(null);
      }
    }
  };

  const handleDayHover = (dateStr) => {
    if (selectionRange.start && !selectionRange.end) {
      setHoverDate(dateStr);
    }
  };

  const handleNoteChange = (key, text) => {
    setNotes(prev => ({ ...prev, [key]: text }));
  };

  const handleExport = () => {
    if (!selectionRange.start || !selectionRange.end) {
      showNotification("⚠️ Please select a complete date range first.");
      return;
    }
    
    const d1 = new Date(selectionRange.start);
    const d2 = new Date(selectionRange.end);
    
    const start = d1 < d2 ? d1 : d2;
    const end = d1 > d2 ? d1 : d2;
    
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
    
    const formatOpts = { month: 'short', day: 'numeric', year: 'numeric' };
    const str1 = start.toLocaleDateString('en-US', formatOpts);
    const str2 = end.toLocaleDateString('en-US', formatOpts);
    
    showNotification(`✅ Exported: ${str1} – ${str2} (${diffDays} days)`);
  };

  return (
    <div 
      className="relative w-full dark-mode"
      style={{ 
        perspective: '2000px',
        '--theme-primary': currentTheme.primary, 
        '--theme-light': `color-mix(in srgb, ${currentTheme.primary} 15%, #1e293b)`,
        '--theme-base': '#1e293b',
        '--theme-hero': `color-mix(in srgb, ${currentTheme.heroBg} 30%, #0f172a)`
      }}
    >
      {/* Spiral Binding */}
      <SpiralBinding />

      <div 
        key={`${currentYear}-${currentMonth}`}
        className={`calendar-card flex flex-col lg:flex-row w-full rounded-2xl overflow-hidden relative page-flip-container ${direction === 'next' ? 'animate-flip-next' : 'animate-flip-prev'}`}
      >

      {/* Left panel: Image + Month Nav */}
      <div className="w-full lg:w-[38%] flex flex-col relative">
        <MonthNav 
          monthName={MONTH_NAMES[currentMonth]} 
          year={currentYear} 
          onPrev={handlePrevMonth} 
          onNext={handleNextMonth} 
        />
        <HeroImage imageUrl={MONTH_IMAGES[currentMonth]} monthName={MONTH_NAMES[currentMonth]} />
      </div>

      {/* Right panel: Calendar Grid + Notes */}
      <div className="calendar-right-panel w-full lg:w-[62%] flex flex-col p-6 lg:px-10 lg:py-8 relative overflow-hidden">
        {/* Decorative background image */}
        {currentTheme.bgImage && (
          <div 
            className="bg-image-overlay absolute inset-0 pointer-events-none z-0"
            style={{
              backgroundImage: `url(${currentTheme.bgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center top',
            }}
          />
        )}

        <div className="flex-1 w-full relative z-10">
           <CalendarGrid 
             year={currentYear} 
             month={currentMonth}
             selectionRange={selectionRange}
             hoverDate={hoverDate}
             onDayClick={handleDayClick}
             onDayHover={handleDayHover}
             notes={notes}
           />
        </div>
        
        <div className="notes-divider mt-6 pt-5 relative z-10">
          <div className="flex justify-between items-center mb-4 pl-3">
             <h3 className="notes-heading text-4xl lowercase" style={{ color: 'var(--theme-primary)', fontFamily: "'Great Vibes', cursive" }}>Notes</h3>
             <button 
                onClick={handleExport}
                className="export-btn"
              >
               Export Range
             </button>
          </div>
          <NotesPanel notes={notes} onChange={handleNoteChange} selectionRange={selectionRange} year={currentYear} month={currentMonth} />
        </div>
      </div>
      </div>
      
      {/* Toast Notification */}
      {notification && (
        <div className="toast-notification absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50">
          {notification}
        </div>
      )}
    </div>
  );
}
