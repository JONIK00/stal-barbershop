import * as React from "react";

type IconProps = React.SVGProps<SVGSVGElement>;
const base = { fill: "none", stroke: "currentColor", strokeWidth: 1.4, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, viewBox: "0 0 24 24" };

export const RazorIcon = (p: IconProps) => (<svg {...base} {...p} aria-hidden="true"><path d="M3 14l7-7 5 5-7 7z"/><path d="M15 12l5-5a2.5 2.5 0 0 0-3.5-3.5l-5 5"/><path d="M4 20l2-2"/><path d="M10 6l4 4"/></svg>);
export const ScissorsIcon = (p: IconProps) => (<svg {...base} {...p} aria-hidden="true"><circle cx="6" cy="6" r="2.5"/><circle cx="6" cy="18" r="2.5"/><path d="M8 7.5L20 18"/><path d="M8 16.5L20 6"/></svg>);
export const ClipperIcon = (p: IconProps) => (<svg {...base} {...p} aria-hidden="true"><rect x="4" y="8" width="16" height="9" rx="1"/><path d="M6 8V5h12v3"/><path d="M4 17v2h16v-2"/><path d="M8 11h2M12 11h2M16 11h.01"/></svg>);
export const SmileIcon = (p: IconProps) => (<svg {...base} {...p} aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M8.5 14a4.5 4.5 0 0 0 7 0"/><path d="M9 9h.01M15 9h.01"/></svg>);
export const CombIcon = (p: IconProps) => (<svg {...base} {...p} aria-hidden="true"><path d="M3 7h18v3H3z"/><path d="M5 10v9M8 10v9M11 10v9M14 10v9M17 10v9M20 10v6"/></svg>);
export const MustacheIcon = (p: IconProps) => (<svg {...base} {...p} aria-hidden="true"><path d="M12 12c-1.5 0-2 1-3.5 1S5 12 4 13s0 3 2 3 2.5-1.5 4-2.5"/><path d="M12 12c1.5 0 2 1 3.5 1S19 12 20 13s0 3-2 3-2.5-1.5-4-2.5"/></svg>);
export const BeardIcon = (p: IconProps) => (<svg {...base} {...p} aria-hidden="true"><path d="M6 4h12v5c0 5-2.5 9-6 11-3.5-2-6-6-6-11z"/><path d="M9 8h6"/></svg>);
export const BulbIcon = (p: IconProps) => (<svg {...base} {...p} aria-hidden="true"><path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-3.5 10.9c.6.4 1 1 1 1.7V16h5v-.4c0-.7.4-1.3 1-1.7A6 6 0 0 0 12 3z"/></svg>);
export const MoonIcon = (p: IconProps) => (<svg {...base} {...p} aria-hidden="true"><path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z"/></svg>);
export const ClockIcon = (p: IconProps) => (<svg {...base} {...p} aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>);
export const PhoneIcon = (p: IconProps) => (<svg {...base} {...p} aria-hidden="true"><path d="M5 4h3l2 5-2 1a11 11 0 0 0 5 5l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/></svg>);
export const PinIcon = (p: IconProps) => (<svg {...base} {...p} aria-hidden="true"><path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>);
export const InstagramIcon = (p: IconProps) => (<svg {...base} {...p} aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17 7h.01"/></svg>);
export const TelegramIcon = (p: IconProps) => (<svg {...base} {...p} aria-hidden="true"><path d="M21 4L3 11l5 2 2 6 3-4 5 4z"/></svg>);
export const VkIcon = (p: IconProps) => (<svg {...base} {...p} aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="4"/><path d="M7 9c0 4 2 7 5 7h1v-3l2 2h2l-3-3 3-3h-2l-2 2v-2c0-1-1-1-2-1"/></svg>);
export const StarIcon = (p: IconProps) => (<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}><path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.8 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8z"/></svg>);
export const ArrowIcon = (p: IconProps) => (<svg {...base} {...p} aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>);
export const MenuIcon = (p: IconProps) => (<svg {...base} {...p} aria-hidden="true"><path d="M3 6h18M3 12h18M3 18h18"/></svg>);
export const CloseIcon = (p: IconProps) => (<svg {...base} {...p} aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>);
export const ArrowUpIcon = (p: IconProps) => (<svg {...base} {...p} aria-hidden="true"><path d="M12 19V5M6 11l6-6 6 6"/></svg>);
export const ArrowDownIcon = (p: IconProps) => (<svg {...base} {...p} aria-hidden="true"><path d="M12 5v14M6 13l6 6 6-6"/></svg>);
export const CheckIcon = (p: IconProps) => (<svg {...base} {...p} aria-hidden="true"><path d="M5 13l4 4L19 7"/></svg>);
export const WhatsappIcon = (p: IconProps) => (<svg {...base} {...p} aria-hidden="true"><path d="M3 21l1.6-4.5A8 8 0 1 1 8 19.5L3 21z"/><path d="M8.5 9c.2 2 1.5 3.8 3.3 4.8.6.3 1.2.3 1.6-.2l.4-.5c.2-.2.5-.2.7-.1l1.3.7c.2.1.3.4.2.7-.3.8-1.2 1.4-2.1 1.2-2.4-.5-4.5-2.5-5.2-4.9-.2-.6 0-1.3.6-1.7l1-.6c.2-.1.5 0 .6.2l.4.7c.1.2.1.4 0 .6z"/></svg>);
export const BrandMark = (p: IconProps) => {
  const id = `bm${React.useId().replace(/[^a-zA-Z0-9]/g, "")}`;
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" {...p}>
      <mask id={id} maskUnits="userSpaceOnUse" x="0" y="0" width="48" height="48">
        <rect width="48" height="48" fill="#fff" />
        {/* вырез-X: лезвия входят от верха средней стойки, бабочка-центр, внизу ручки выходят в зазоры */}
        <path fill="#000" fillRule="nonzero" d="M20 12.4 L20.6 12.4 L24 24.8 L22.6 24.6 Z M28 12.4 L27.4 12.4 L24 24.8 L25.4 24.6 Z M22.6 24.6 L25.4 24.6 L25.4 33 L22.6 33 Z M22.6 31.8 C21.9 33.6 20.6 36.5 19.9 38.4 Q21.8 38.9 24 38.7 C21.2 38.6 22.9 34.2 24 33 L22.6 31.8 Z M25.4 31.8 C26.1 33.6 27.4 36.5 28.1 38.4 Q26.2 38.9 24 38.7 C26.8 38.6 25.1 34.2 24 33 L25.4 31.8 Z" />
      </mask>
      <g fill="currentColor">
        {/* монолитная «Ш»: тонкие стойки, отдельные засечки-трапеции, расширение к низу, тонкая база */}
        <path mask={`url(#${id})`} d="M1.2 7.5h11.4l-2 4.9v24.3l1.4 3.9H3.2l1-3.9V12.4Zm18.2 0h10l-1.3 4.9v28.1h-8.2V12.4Zm16 0h11.4l-3.3 4.9v24.3l1.4 3.9H36l1-3.9V12.4ZM1 38.4h46v2.1H1Z" />
        {/* винт-точка в центре выреза */}
        <circle cx="24" cy="29.2" r="0.6" />
        {/* ручки ножниц: из стойки вниз-в стороны к кольцам */}
        <path d="M20.6 33.2q-2 .8-3.5 2.1" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" />
        <path d="M27.4 33.2q2 .8 3.5 2.1" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" />
        {/* кольца в зазорах, низом сливаются с базой */}
        <path fillRule="evenodd" d="M17.65 36.7a1.75 1.75 0 1 0-3.5 0 1.75 1.75 0 1 0 3.5 0Zm-.85 0a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 1 1 2.2 0Z" />
        <path fillRule="evenodd" d="M33.85 36.7a1.75 1.75 0 1 0-3.5 0 1.75 1.75 0 1 0 3.5 0Zm-.85 0a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 1 1 2.2 0Z" />
      </g>
    </svg>
  );
};
