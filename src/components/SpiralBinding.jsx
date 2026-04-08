import React from 'react';

export default function SpiralBinding() {
  const metalGradient = `
    <linearGradient id='metal' x1='0%25' y1='0%25' x2='100%25' y2='0%25'>
      <stop offset='0%25' stop-color='%2364748b' />
      <stop offset='30%25' stop-color='%23cbd5e1' />
      <stop offset='50%25' stop-color='%23f8fafc' />
      <stop offset='70%25' stop-color='%2394a3b8' />
      <stop offset='100%25' stop-color='%23334155' />
    </linearGradient>
  `;

  // SVG representation of a single Twin-Loop (Wire-O) element plus the hole punch
  const loopSvg = `
    <svg width='18' height='36' xmlns='http://www.w3.org/2000/svg'>
      <defs>${metalGradient}</defs>
      
      <!-- The punched hole shadow and edge -->
      <rect x='3' y='17' rx='2.5' width='12' height='12' fill='%23000000' fill-opacity='0.15' />
      <rect x='3' y='16' rx='2.5' width='12' height='12' fill='%23ffffff' fill-opacity='0.4' />
      
      <!-- Left wire of twin -->
      <rect x='5' y='6' width='3.5' height='26' rx='1.75' fill='url(%23metal)' stroke='%23334155' stroke-width='0.5' />
      <!-- Right wire of twin -->
      <rect x='9.5' y='6' width='3.5' height='26' rx='1.75' fill='url(%23metal)' stroke='%23334155' stroke-width='0.5' />

      <!-- Top curved connector -->
      <path d='M 6.75 6 C 6.75 2.5 11.25 2.5 11.25 6' fill='none' stroke='url(%23metal)' stroke-width='2' />
    </svg>
  `;

  return (
    <div className="absolute top-[-18px] left-0 w-full h-[36px] flex justify-center items-center pointer-events-none z-50">
      
      {/* Repeating twin-wire pattern with a masked center to make room for the hanger */}
      <div 
        className="absolute w-full h-full"
        style={{
          backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(loopSvg)}")`,
          backgroundRepeat: 'repeat-x',
          backgroundPosition: 'center',
          // Mask out the middle 80px so we can drop the custom SVG hanger
          WebkitMaskImage: 'linear-gradient(to right, black 0%, black calc(50% - 45px), transparent calc(50% - 45px), transparent calc(50% + 45px), black calc(50% + 45px), black 100%)',
          maskImage: 'linear-gradient(to right, black 0%, black calc(50% - 45px), transparent calc(50% - 45px), transparent calc(50% + 45px), black calc(50% + 45px), black 100%)'
        }}
      ></div>

      {/* The Center Hanger Hook (matches user's image) */}
      <div className="relative z-10 flex justify-center items-center w-[90px] h-full overflow-visible drop-shadow-md">
         <svg width="90" height="40" viewBox="0 0 90 40" className="overflow-visible" style={{ transform: 'translateY(-2px)' }}>
            <defs>
              <linearGradient id="hookMetal" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#64748b" />
                <stop offset="30%" stopColor="#cbd5e1" />
                <stop offset="50%" stopColor="#f8fafc" />
                <stop offset="70%" stopColor="#94a3b8" />
                <stop offset="100%" stopColor="#334155" />
              </linearGradient>
            </defs>

            {/* Left termination twin-loop */}
            <rect x="5" y="19" rx="2.5" width="12" height="12" fill="#000000" fillOpacity="0.15" />
            <rect x="5" y="18" rx="2.5" width="12" height="12" fill="#ffffff" fillOpacity="0.4" />
            
            <rect x="7" y="8" width="3.5" height="26" rx="1.75" fill="url(#hookMetal)" stroke="#334155" strokeWidth="0.5" />
            <rect x="11.5" y="8" width="3.5" height="26" rx="1.75" fill="url(#hookMetal)" stroke="#334155" strokeWidth="0.5" />
            <path d="M 8.75 8 C 8.75 4.5 13.25 4.5 13.25 8" fill="none" stroke="url(#hookMetal)" strokeWidth="2" />

            {/* Right termination twin-loop */}
            <rect x="73" y="19" rx="2.5" width="12" height="12" fill="#000000" fillOpacity="0.15" />
            <rect x="73" y="18" rx="2.5" width="12" height="12" fill="#ffffff" fillOpacity="0.4" />

            <rect x="75" y="8" width="3.5" height="26" rx="1.75" fill="url(#hookMetal)" stroke="#334155" strokeWidth="0.5" />
            <rect x="79.5" y="8" width="3.5" height="26" rx="1.75" fill="url(#hookMetal)" stroke="#334155" strokeWidth="0.5" />
            <path d="M 76.75 8 C 76.75 4.5 81.25 4.5 81.25 8" fill="none" stroke="url(#hookMetal)" strokeWidth="2" />

            {/* The hanger triangle starting from inside the inner bounding wires */}
            {/* From inner left loop up to center peak and down to inner right loop */}
            <path d="M 13.25 15 L 43 -5 L 45 -5 L 75 15" fill="none" stroke="url(#hookMetal)" strokeWidth="2" strokeLinejoin="round" />
            <path d="M 13.25 15.5 L 43 -4.5 L 45 -4.5 L 75 15.5" fill="none" stroke="#475569" strokeWidth="0.5" strokeLinejoin="round" />
            
            {/* Tiny top loop hook commonly found on these calendars */}
            <circle cx="44" cy="-5" r="3.5" fill="none" stroke="url(#hookMetal)" strokeWidth="2" />
            <circle cx="44" cy="-5" r="3.5" fill="none" stroke="#475569" strokeWidth="0.5" />
         </svg>
      </div>
    </div>
  );
}
