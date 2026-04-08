export const MONTH_IMAGES = [
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80", // Jan
  "https://images.unsplash.com/photo-1517315003714-a071486bd9ea?auto=format&fit=crop&w=800&q=80", // Feb
  "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80", // Mar
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80", // Apr
  "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&q=80", // May
  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=800&q=80", // Jun
  "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=800&q=80", // Jul
  "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=800&q=80", // Aug
  "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=800&q=80", // Sep
  "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?auto=format&fit=crop&w=800&q=80", // Oct
  "https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?auto=format&fit=crop&w=800&q=80", // Nov
  "https://images.unsplash.com/photo-1483664852095-d6cc6870702d?auto=format&fit=crop&w=800&q=80"  // Dec
];

export const MONTH_NAMES = [
  "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", 
  "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"
];

// Map of "MM-DD" to Holiday Name for Indian holidays
export const HOLIDAYS = {
  "01-01": "New Year's Day",
  "01-14": "Makar Sankranti",
  "01-26": "Republic Day",
  "02-14": "Valentine's Day",
  "03-08": "Maha Shivaratri",
  "03-24": "Holi (Festival of Colors)",
  "04-14": "Ambedkar Jayanti",
  "05-01": "Labour Day",
  "08-15": "Independence Day",
  "08-26": "Raksha Bandhan",
  "09-04": "Janmashtami",
  "09-14": "Ganesh Chaturthi",
  "10-02": "Gandhi Jayanti",
  "10-19": "Dussehra",
  "11-08": "Diwali (Festival of Lights)",
  "12-25": "Christmas Day"
};

/**
 * Returns YYYY-MM-DD padded string
 */
export const formatDateString = (year, month, day) => {
  const m = String(month + 1).padStart(2, '0');
  const d = String(day).padStart(2, '0');
  return `${year}-${m}-${d}`;
}

export const getDaysInMonth = (year, monthIndex) => {
  return new Date(year, monthIndex + 1, 0).getDate();
};

export const getStartDayOfMonth = (year, monthIndex) => {
  return new Date(year, monthIndex, 1).getDay();
};

export const isSameDate = (dateString1, dateString2) => {
  return dateString1 === dateString2;
};

// Check if testDate is between start and end (all 'YYYY-MM-DD' strings)
export const isDateBetween = (testDateStr, startStr, endStr) => {
  if (!startStr || !endStr) return false;
  const testDate = new Date(testDateStr);
  const start = new Date(startStr);
  const end = new Date(endStr);
  
  // order might be swapped
  const lower = start < end ? start : end;
  const upper = start > end ? start : end;
  
  return testDate > lower && testDate < upper;
};

export const MONTH_THEMES = [
  { primary: '#0ea5e9', light: '#e0f2fe', bgBase: '#f0f9ff', heroBg: '#bae6fd', bgImage: 'https://images.unsplash.com/photo-1547754980-3df97fed72a8?auto=format&fit=crop&w=1200&q=80' }, // Jan - Snowy winter branches
  { primary: '#db2777', light: '#fce7f3', bgBase: '#fdf2f8', heroBg: '#fbcfe8', bgImage: 'https://images.unsplash.com/photo-1518895312237-a9e23508077d?auto=format&fit=crop&w=1200&q=80' }, // Feb - Pink roses & hearts
  { primary: '#059669', light: '#d1fae5', bgBase: '#ecfdf5', heroBg: '#a7f3d0', bgImage: 'https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?auto=format&fit=crop&w=1200&q=80' }, // Mar - Cherry blossoms
  { primary: '#7c3aed', light: '#ede9fe', bgBase: '#f5f3ff', heroBg: '#ddd6fe', bgImage: 'https://images.unsplash.com/photo-1499002238440-d264edd596ec?auto=format&fit=crop&w=1200&q=80' }, // Apr - Purple wisteria flowers
  { primary: '#d97706', light: '#fef3c7', bgBase: '#fffbeb', heroBg: '#fde68a', bgImage: 'https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?auto=format&fit=crop&w=1200&q=80' }, // May - Wildflower fields
  { primary: '#e11d48', light: '#ffe4e6', bgBase: '#fff1f2', heroBg: '#fecdd3', bgImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80' }, // Jun - Tropical beach
  { primary: '#0891b2', light: '#cffafe', bgBase: '#ecfeff', heroBg: '#a5f3fc', bgImage: 'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1200&q=80' }, // Jul - Ocean waves
  { primary: '#ca8a04', light: '#fef08a', bgBase: '#fefce8', heroBg: '#fde047', bgImage: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80' }, // Aug - Golden sunflower field
  { primary: '#ea580c', light: '#ffedd5', bgBase: '#fff7ed', heroBg: '#fed7aa', bgImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80' }, // Sep - Golden autumn trees
  { primary: '#c026d3', light: '#fae8ff', bgBase: '#fdf4ff', heroBg: '#f5d0fe', bgImage: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1200&q=80' }, // Oct - Halloween pumpkins
  { primary: '#65a30d', light: '#ecfccb', bgBase: '#f7fee7', heroBg: '#d9f99d', bgImage: 'https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?auto=format&fit=crop&w=1200&q=80' }, // Nov - Misty autumn forest path
  { primary: '#dc2626', light: '#fee2e2', bgBase: '#fef2f2', heroBg: '#fecaca', bgImage: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&w=1200&q=80' }, // Dec - Christmas pine & snow
];
