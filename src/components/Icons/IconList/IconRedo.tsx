import Icon, { getCssFillClassName } from '../Icon';
import IconProps from '../IconProps';

const IconRedo = ({ className, color }: IconProps) => {
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
          <g clip-path="url(#clip0_433_180)">
            <path
              className={cssFillClassName}
              d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8C6.85004 8 2.92004 11.03 1.54004 15.22L3.90004 16C4.95004 12.81 7.95004 10.5 11.5 10.5C13.45 10.5 15.23 11.22 16.62 12.38L13 16H22V7L18.4 10.6Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_433_180">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      }
    />
  );
};

export default IconRedo;
