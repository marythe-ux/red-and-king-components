import Icon, { getCssFillClassName } from '../Icon';
import IconProps from '../IconProps';

const IconLowPriority = ({ className, color }: IconProps) => {
  const cssFillClassName = getCssFillClassName(color);

  return (
    <Icon
      svg={
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <g clip-path="url(#clip0_433_146)">
            <path
              className={cssFillClassName}
              d="M14 5H22V7H14V5ZM14 10.5H22V12.5H14V10.5ZM14 16H22V18H14V16ZM2 11.5C2 15.08 4.92 18 8.5 18H9V20L12 17L9 14V16H8.5C6.02 16 4 13.98 4 11.5C4 9.02 6.02 7 8.5 7H12V5H8.5C4.92 5 2 7.92 2 11.5Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_433_146">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      }
    />
  );
};

export default IconLowPriority;
