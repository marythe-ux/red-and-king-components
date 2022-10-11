import Icon, { getCssFillClassName } from '../Icon';
import IconProps from '../IconProps';

const IconDynamicFeed = ({ className, color }: IconProps) => {
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
          <g clip-path="url(#clip0_433_86)">
            <path
              className={cssFillClassName}
              d="M8 8H6V15C6 16.1 6.9 17 8 17H17V15H8V8Z"
              fill="black"
            />
            <path
              className={cssFillClassName}
              d="M20 3H12C10.9 3 10 3.9 10 5V11C10 12.1 10.9 13 12 13H20C21.1 13 22 12.1 22 11V5C22 3.9 21.1 3 20 3ZM20 11H12V7H20V11Z"
              fill="black"
            />
            <path
              className={cssFillClassName}
              d="M4 12H2V19C2 20.1 2.9 21 4 21H13V19H4V12Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_433_86">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      }
    />
  );
};

export default IconDynamicFeed;
