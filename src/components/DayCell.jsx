import PropTypes from 'prop-types';

export default function DayCell({ day, dateStr, isToday, isStart, isEnd, inRange, hasNote, holiday, noteText, onClick, onMouseEnter }) {
  
  let cellClass = "day-cell relative flex items-center justify-center aspect-square w-8 sm:w-10 md:w-12 mx-auto rounded-xl text-sm cursor-pointer transition-all duration-200 select-none group";
  let cellStyle = {};
  
  if (isStart || isEnd) {
    cellClass += " day-cell-selected text-white font-semibold transform scale-105 hover:scale-115 hover:z-20 z-10";
    cellStyle.backgroundColor = 'var(--theme-primary)';
  } else if (inRange) {
    cellClass += " font-medium hover:scale-105 hover:z-20 day-cell-hover"; 
    cellStyle.backgroundColor = 'transparent';
    cellStyle.color = 'var(--theme-primary)';
  } else if (isToday) {
    cellClass += " day-cell-today font-semibold hover:scale-105 hover:z-20 day-cell-hover";
    cellStyle.color = 'var(--theme-primary)';
    cellStyle.backgroundColor = 'transparent';
  } else {
    cellClass += " day-cell-default hover:scale-105 hover:z-20 day-cell-hover";
    cellStyle.backgroundColor = 'transparent';
  }

  // Tooltip content
  const tooltipLines = [];
  if (holiday) tooltipLines.push(`🎉  ${holiday}`);
  if (hasNote && noteText) tooltipLines.push(`📝  ${noteText.substring(0,30)}${noteText.length > 30 ? '…' : ''}`);
  
  if (tooltipLines.length === 0) {
    const [y, m, d] = dateStr.split('-');
    const monthNamesLocal = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    tooltipLines.push(`${monthNamesLocal[parseInt(m)-1]} ${parseInt(d)}, ${y}`);
  }

  return (
    <div className="relative py-0.5 w-full" onClick={onClick} onMouseEnter={onMouseEnter}>
      {/* Range background connectors */}
      {inRange && !isStart && !isEnd && (
        <div className="absolute inset-0 -mx-0.5 z-0 transition-colors duration-500" style={{ backgroundColor: 'var(--theme-light)' }}></div>
      )}
      
      {isStart && !isEnd && (
        <div className="absolute inset-y-0 right-[-2px] w-1/2 z-0 hidden sm:block transition-colors duration-500" style={{ backgroundColor: 'var(--theme-light)' }}></div>
      )}
      {isEnd && !isStart && (
        <div className="absolute inset-y-0 left-[-2px] w-1/2 z-0 hidden sm:block transition-colors duration-500" style={{ backgroundColor: 'var(--theme-light)' }}></div>
      )}

      <div className={cellClass} style={cellStyle}>
        <span className="z-10 relative">{day}</span>
        
        {/* Indicators */}
        <div className="absolute -bottom-0.5 flex gap-1 z-10">
          {hasNote && <span className="indicator-dot note"></span>}
          {holiday && <span className="indicator-dot holiday"></span>}
        </div>

        {/* Tooltip */}
        <div className="day-tooltip absolute bottom-full mb-3 hidden group-hover:flex flex-col items-center justify-center w-max max-w-xs z-[100] pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-200 delay-100 transform translate-y-2 group-hover:translate-y-0">
           {tooltipLines.map((line, idx) => (
             <span key={idx} className="block whitespace-nowrap">{line}</span>
           ))}
           <div className="day-tooltip-arrow w-2.5 h-2.5 -mb-2 transform rotate-45 absolute -bottom-1"></div>
        </div>
      </div>
    </div>
  );
}

DayCell.propTypes = {
  day: PropTypes.number.isRequired,
  dateStr: PropTypes.string.isRequired,
  isToday: PropTypes.bool.isRequired,
  isStart: PropTypes.bool.isRequired,
  isEnd: PropTypes.bool.isRequired,
  inRange: PropTypes.bool.isRequired,
  hasNote: PropTypes.bool.isRequired,
  holiday: PropTypes.string,
  noteText: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func,
};
