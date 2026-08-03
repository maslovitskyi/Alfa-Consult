import React from "react";

const iconProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const Wrapper = ({ children, className = "" }) => (
  <svg
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-14 h-14 md:w-16 md:h-16 text-[#D2B471] transition-all duration-300 hover:scale-110 ${className}`}
  >
    {children}
  </svg>
);

/* =========================
   СОФТ
========================= */

export const SoftwareIcon = ({ className }) => (
  <Wrapper className={className}>
    <rect x="11" y="10" width="42" height="30" rx="3" {...iconProps} />

    <line x1="11" y1="18" x2="53" y2="18" {...iconProps} />

    <circle cx="16" cy="14" r="1" fill="currentColor" />

    <circle cx="20" cy="14" r="1" fill="currentColor" />

    <circle cx="24" cy="14" r="1" fill="currentColor" />

    <rect x="18" y="23" width="10" height="10" rx="1.5" {...iconProps} />

    <rect x="35" y="23" width="10" height="10" rx="1.5" {...iconProps} />

    <line x1="24" y1="40" x2="40" y2="40" {...iconProps} />

    <line x1="32" y1="40" x2="32" y2="50" {...iconProps} />

    <line x1="22" y1="50" x2="42" y2="50" {...iconProps} />
  </Wrapper>
);

/* =========================
   БУХУЧЁТ
========================= */

export const AccountingIcon = ({ className }) => (
  <Wrapper className={className}>
    <rect x="18" y="8" width="28" height="46" rx="3" {...iconProps} />

    <rect x="23" y="14" width="18" height="6" rx="1" {...iconProps} />

    {[
      [25, 27],
      [32, 27],
      [39, 27],
      [25, 34],
      [32, 34],
      [39, 34],
      [25, 41],
      [32, 41],
      [39, 41],
    ].map(([x, y], i) => (
      <circle key={i} cx={x} cy={y} r="1.2" fill="currentColor" />
    ))}

    <line x1="24" y1="48" x2="40" y2="48" {...iconProps} />
  </Wrapper>
);

/* =========================
   КОМПЬЮТЕРЫ
========================= */

export const ComputerIcon = ({ className }) => (
  <Wrapper className={className}>
    <rect x="9" y="10" width="46" height="28" rx="2.5" {...iconProps} />

    <line x1="32" y1="38" x2="32" y2="46" {...iconProps} />

    <line x1="22" y1="46" x2="42" y2="46" {...iconProps} />

    <line x1="16" y1="18" x2="48" y2="18" {...iconProps} />

    <polyline points="18 29 25 22 31 28 39 20 46 27" {...iconProps} />
  </Wrapper>
);

/* =========================
   РЕМОНТ
========================= */

export const RepairIcon = ({ className }) => (
  <Wrapper className={className}>
    <path
      d="M40 12
         a7 7 0 0 0-9 9
         L17 35
         a4 4 0 0 0 6 6
         l14-14
         a7 7 0 0 0 9-9
         l-6 6
         l-4-4
         z"
      {...iconProps}
    />

    <line x1="19" y1="37" x2="27" y2="45" {...iconProps} />

    <path
      d="M18 16
         l10 10"
      {...iconProps}
    />

    <line x1="15" y1="13" x2="21" y2="19" {...iconProps} />
  </Wrapper>
);

/* =========================
   КАССЫ
========================= */

export const CashRegisterIcon = ({ className }) => (
  <Wrapper className={className}>
    <rect x="15" y="20" width="34" height="25" rx="2.5" {...iconProps} />

    <rect x="20" y="11" width="24" height="10" rx="2" {...iconProps} />

    <rect x="20" y="27" width="12" height="6" rx="1" {...iconProps} />

    {[
      [37, 28],
      [42, 28],
      [37, 33],
      [42, 33],
      [37, 38],
      [42, 38],
    ].map(([x, y], i) => (
      <circle key={i} cx={x} cy={y} r="1" fill="currentColor" />
    ))}

    <line x1="20" y1="38" x2="30" y2="38" {...iconProps} />
  </Wrapper>
);