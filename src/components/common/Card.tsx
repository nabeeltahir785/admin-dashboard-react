import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card = React.memo<CardProps>(({ children, className = '' }) => (
  <div className={`bg-white rounded-lg shadow-sm p-4 ${className}`}>
    {children}
  </div>
));

Card.displayName = 'Card';