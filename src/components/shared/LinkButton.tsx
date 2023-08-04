import classNames from 'classnames';
import Link from 'next/link';
import { UrlObject } from 'url';

type Props = {
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
  href: string | UrlObject;
  children: React.ReactNode;
  className?: string;
};

const LinkButton = ({
  color = 'primary',
  href,
  children,
  className = '',
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
    <Link
      href={href}
      className={classNames('link-button', colorClasses[color], className)}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
