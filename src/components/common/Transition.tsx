import React from 'react';
import { transitions } from '../../utils/animations';

interface TransitionProps {
  show: boolean;
  children: React.ReactNode;
  duration?: keyof typeof transitions;
}

export const Transition: React.FC<TransitionProps> = ({
  show,
  children,
  duration = 'medium',
}) => (
  <div
    className={`
      ${transitions[duration]}
      ${show ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}
    `}
  >
    {children}
  </div>
);