import classNames from 'classnames';
import React, { MouseEventHandler } from 'react';

type Props = {
  type?: 'button' | 'submit' | 'reset';
  color?:
    | 'amber'
    | 'blue'
    | 'cyan'
    | 'emerald'
    | 'fuchsia'
    | 'green'
    | 'gray'
    | 'indigo'
    | 'lime'
    | 'orange'
    | 'pink'
    | 'purple'
    | 'red'
    | 'rose'
    | 'sky'
    | 'teal'
    | 'violet'
    | 'yellow'
    | 'primary'
    | 'secondary'
    | 'danger'
    | 'white';
  children: React.ReactNode;
  className?: string;
  loading?: boolean;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const Button = ({
  color = 'primary',
  type = 'button',
  children,
  className = '',
  loading,
  disabled,
  onClick,
}: Props) => {
  const colorClasses = {
    amber: 'bg-amber-500 hover:bg-amber-600 text-gray-800',
    blue: 'bg-blue-500 hover:bg-blue-600 text-white',
    cyan: 'bg-cyan-500 hover:bg-cyan-600 text-white',
    emerald: 'bg-emerald-500 hover:bg-emerald-600 text-white',
    fuchsia: 'bg-fuchsia-500 hover:bg-fuchsia-600 text-white',
    green: 'bg-green-500 hover:bg-green-600 text-white',
    gray: 'bg-gray-500 hover:bg-gray-600 text-gray-100 text-white',
    indigo: 'bg-indigo-500 hover:bg-indigo-600 text-white',
    lime: 'bg-lime-500 hover:bg-lime-600 text-white',
    orange: 'bg-orange-500 hover:bg-orange-600 text-white',
    pink: 'bg-pink-500 hover:bg-pink-600 text-white',
    purple: 'bg-purple-500 hover:bg-purple-600 text-white',
    red: 'bg-red-500 hover:bg-red-600 text-white',
    rose: 'bg-rose-500 hover:bg-rose-600 text-white',
    sky: 'bg-sky-500 hover:bg-sky-600 text-white',
    teal: 'bg-teal-500 hover:bg-teal-600 text-white',
    violet: 'bg-violet-500 hover:bg-violet-600 text-white',
    yellow: 'bg-yellow-500 hover:bg-yellow-600 text-white',
    primary: 'bg-primary-500 hover:bg-primary-600 text-white',
    secondary: 'bg-secondary-500 hover:bg-secondary-600 text-white',
    danger: 'bg-danger-500 hover:bg-danger-600 text-white',
    white: 'bg-white hover:bg-gray-100 text-gray-800',
  };
  return (
    <button
      type={type}
      disabled={disabled}
      className={classNames('button', colorClasses[color], className, (disabled || loading) && 'opacity-25')}
      onClick={onClick}
    >
      {loading && (
        <svg
          className="mr-2 h-5 w-5 animate-spin text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
      {children}
    </button>
  );
};

export default Button;
