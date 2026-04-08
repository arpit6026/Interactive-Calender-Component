import PropTypes from 'prop-types';
import { MONTH_NAMES } from '../utils/date';

export default function NotesPanel({ notes, onChange, selectionRange, year, month }) {
  const monthKey = `general-${year}-${String(month + 1).padStart(2, '0')}`;
  const monthLabel = MONTH_NAMES[month];

  let editKey = monthKey;
  let title = `${monthLabel} Notes`;

  if (selectionRange.start && !selectionRange.end) {
    editKey = selectionRange.start;
    title = `Note for ${selectionRange.start}`;
  } else if (selectionRange.start && selectionRange.end) {
    if (selectionRange.start === selectionRange.end) {
      editKey = selectionRange.start;
      title = `Note for ${selectionRange.start}`;
    } else {
      title = `Range: ${selectionRange.start} → ${selectionRange.end}`;
    }
  }

  const currentText = notes[editKey] || '';
  const isMonthNotes = editKey === monthKey;

  return (
    <div className="w-full">
      <div className="notes-title mb-3 pl-1 lowercase" style={{ fontFamily: "'Great Vibes', cursive" }}>
        {title}
      </div>
      <textarea
        value={currentText}
        onChange={(e) => onChange(editKey, e.target.value)}
        placeholder={isMonthNotes ? `Write notes for ${monthLabel.toLowerCase()}…` : `Write a note for ${editKey}…`}
        className="notes-textarea w-full h-28 focus:outline-none resize-none"
        style={{
           backgroundImage: 'repeating-linear-gradient(transparent, transparent 27px, rgba(148, 163, 184, 0.08) 28px)',
        }}
      />
    </div>
  );
}

NotesPanel.propTypes = {
  notes: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  selectionRange: PropTypes.shape({
    start: PropTypes.string,
    end: PropTypes.string,
  }).isRequired,
  year: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
};
