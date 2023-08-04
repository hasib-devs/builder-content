import React, { useState } from 'react';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import { IconType } from 'react-icons/lib';
import { twMerge } from 'tailwind-merge';

interface Props {
  className?: string;
  count: number;
  value: number;
  color?: string;
  hoverColor?: string;
  activeColor?: string;
  size?: number;
  edit?: boolean;
  isHalf?: boolean;
  onChange?: (value: number) => void;
  emptyIcon?: IconType;
  halfIcon?: IconType;
  fullIcon?: IconType;
}

const Rating: React.FC<Props> = ({
  className,
  count,
  value,
  color = 'var(--gray-300)',
  hoverColor = 'var(--yellow-400)',
  activeColor = 'var(--yellow-400)',
  size = 20,
  edit = false,
  isHalf = true,
  onChange,
  emptyIcon = BsStar,
  halfIcon = BsStarHalf,
  fullIcon = BsStarFill,
}) => {
  const [hoverValue, setHoverValue] = useState<number | undefined>(undefined);

  const handleMouseMove = (index: number) => {
    if (!edit) {
      return;
    }
    setHoverValue(index);
  };

  const handleMouseLeave = () => {
    if (!edit) {
      return;
    }
    setHoverValue(undefined);
  };

  const handleClick = (index: number) => {
    if (!edit) {
      return;
    }
    if (onChange) {
      onChange(index + 1);
    }
  };

  const getColor = (index: number) => {
    if (hoverValue !== undefined) {
      if (index <= hoverValue) {
        return hoverColor;
      }
    }
    if (value > index) {
      return activeColor;
    }
    return color;
  };

  const stars: any[] = [];

  for (let i = 0; i < count; i++) {
    let star;
    if (isHalf && value - i > 0 && value - i < 1) {
      star = halfIcon;
    } else if (i < value) {
      star = fullIcon;
    } else {
      star = emptyIcon;
    }

    if (hoverValue !== undefined) {
      if (i <= hoverValue) {
        star = fullIcon;
      }
    }

    stars.push(
      <div
        key={i}
        className="cursor-pointer"
        onMouseMove={() => handleMouseMove(i)}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleClick(i)}
      >
        {React.createElement(star, {
          size: size,
          color: getColor(i),
        })}
      </div>
    );
  }

  return (
    <div className={twMerge('flex items-center gap-0.5', className)}>
      {stars}
    </div>
  );
};

export default Rating;
