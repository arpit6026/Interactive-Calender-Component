import PropTypes from 'prop-types';

export default function MonthNav({ monthName, year, onPrev, onNext }) {
  return (
    <div className="w-full flex items-center justify-between px-5 py-5 bg-transparent z-20">
      <button 
        onClick={onPrev}
        className="nav-btn w-9 h-9 flex items-center justify-center rounded-xl focus:outline-none"
        aria-label="Previous Month"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
      </button>

      <div className="flex items-baseline gap-3">
        <span 
          className="month-name text-4xl md:text-5xl lowercase" 
          style={{ color: 'var(--theme-primary)', fontFamily: "'Great Vibes', cursive" }}
        >
          {monthName}
        </span>
        <span className="year-text text-2xl md:text-3xl">{year}</span>
      </div>

      <button 
        onClick={onNext}
        className="nav-btn w-9 h-9 flex items-center justify-center rounded-xl focus:outline-none"
        aria-label="Next Month"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </div>
  );
}

MonthNav.propTypes = {
  monthName: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  onPrev: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
};
