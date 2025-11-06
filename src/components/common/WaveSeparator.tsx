
import React from 'react';
import { cn } from '@/lib/utils';

interface WaveSeparatorProps {
  className?: string;
  fillColor?: string;
}

export function WaveSeparator({ className, fillColor = 'hsl(var(--background))' }: WaveSeparatorProps) {
  return (
    <div className={cn("w-full leading-none", className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className="block w-full"
        style={{ height: '75px' }}
      >
        <path
          d="M1440,100H0V40C192,73.3,432,100,720,100s528-26.7,720-60V100Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
}
