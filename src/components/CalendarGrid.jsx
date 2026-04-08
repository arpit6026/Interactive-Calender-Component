import { useMemo } from 'react';
import PropTypes from 'prop-types';
import DayCell from './DayCell';
import { 
  getDaysInMonth, 
  getStartDayOfMonth, 
  formatDateString, 
  isDateBetween,
  HOLIDAYS 
} from '../utils/date';

export default function CalendarGrid({ year, month, selectionRange, hoverDate, onDayClick, onDayHover, notes }) {
  const DAYS_OF_WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const daysInMonth = getDaysInMonth(year, month);
  const startDay = getStartDayOfMonth(year, month);
  
  const todayStr = formatDateString(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());

  const gridCells = useMemo(() => {
    const cells = [];
    
    for (let i = 0; i < startDay; i++) {
      cells.push(
        <div key={`empty-${i}`} className="relative py-1 w-full opacity-0 pointer-events-none">
          <div className="aspect-square w-8 sm:w-10 md:w-12 mx-auto"></div>
        </div>
      );
    }

    let effStart = null;
    let effEnd = null;
    
    if (selectionRange.start) {
      const targetEnd = selectionRange.end || hoverDate;
      if (targetEnd) {
        const d1 = new Date(selectionRange.start);
        const d2 = new Date(targetEnd);
        if (d1 <= d2) {
          effStart = selectionRange.start;
          effEnd = targetEnd;
        } else {
          effStart = targetEnd;
          effEnd = selectionRange.start;
        }
      } else {
        effStart = selectionRange.start;
        effEnd = selectionRange.start;
      }
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const dateStr = formatDateString(year, month, day);
      
      const isStart = effStart === dateStr;
      const isEnd = effEnd === dateStr;
      const inRange = effStart && effEnd ? isDateBetween(dateStr, effStart, effEnd) : false;
      
      const holidayKey = dateStr.slice(5);
      const holiday = HOLIDAYS[holidayKey] || null;
      
      const hasNote = !!notes[dateStr];

      cells.push(
        <DayCell 
          key={dateStr}
          day={day}
          dateStr={dateStr}
          isToday={todayStr === dateStr}
          isStart={isStart}
          isEnd={isEnd}
          inRange={inRange}
          hasNote={hasNote}
          holiday={holiday}
          noteText={notes[dateStr]}
          onClick={() => onDayClick(dateStr)}
          onMouseEnter={() => {
            if (onDayHover) onDayHover(dateStr);
          }}
        />
      );
    }
    
    const totalCells = cells.length;
    for (let i = 0; i < 42 - totalCells; i++) {
      cells.push(
        <div key={`empty-end-${i}`} className="relative py-1 w-full opacity-0 pointer-events-none">
          <div className="aspect-square w-8 sm:w-10 md:w-12 mx-auto"></div>
        </div>
      );
    }
    
    return cells;
  }, [year, month, selectionRange, hoverDate, notes, todayStr, daysInMonth, startDay, onDayClick, onDayHover]);

  return (
    <div className="w-full h-full flex flex-col">
      {/* Day Headers */}
      <div className="grid grid-cols-7 mb-5">
        {DAYS_OF_WEEK.map(d => (
          <div key={d} className="day-header text-center py-1">
            {d}
          </div>
        ))}
      </div>
      
      {/* Grid */}
      <div className="grid grid-cols-7 gap-y-1 gap-x-0">
        {gridCells}
      </div>
    </div>
  );
}

CalendarGrid.propTypes = {
  year: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
  selectionRange: PropTypes.shape({
    start: PropTypes.string,
    end: PropTypes.string,
  }).isRequired,
  hoverDate: PropTypes.string,
  onDayClick: PropTypes.func.isRequired,
  onDayHover: PropTypes.func,
  notes: PropTypes.object.isRequired,
};
