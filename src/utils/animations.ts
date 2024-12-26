// Reusable animation classes using Tailwind
export const animations = {
  fadeIn: 'animate-fadeIn',
  slideIn: 'animate-slideIn',
  scaleIn: 'animate-scaleIn',
  spin: 'animate-spin',
  pulse: 'animate-pulse',
  bounce: 'animate-bounce',
} as const;

export const transitions = {
  fast: 'transition-all duration-200 ease-in-out',
  medium: 'transition-all duration-300 ease-in-out',
  slow: 'transition-all duration-500 ease-in-out',
} as const;