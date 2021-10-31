import React from 'react';

interface SpinnerProps {
  color: 'gray' | 'green' | 'primary' | 'red' | 'white' | 'black';
  insideButton?: boolean;
}

const spinnerColor: { [d: string]: string } = {
  gray: 'text-gray',
  green: 'text-green',
  primary: 'text-primary',
  red: 'text-red',
  white: 'text-white',
  black: 'text-black',
};

export const Spinner = ({ color, insideButton = true }: SpinnerProps) => (
  <svg
      className={`animate-spin ${insideButton && '-ml-1 mr-2'} h-5 w-5 ${spinnerColor[color]}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
);
