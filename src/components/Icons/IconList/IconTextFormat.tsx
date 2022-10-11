import Icon, { getCssFillClassName } from '../Icon';
import IconProps from '../IconProps';

const IconTextFormat = ({ className, color }: IconProps) => {
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
          <g clip-path="url(#clip0_433_240)">
            <path
              className={cssFillClassName}
              d="M5 17V19H19V17H5ZM9.5 12.8H14.5L15.4 15H17.5L12.75 4H11.25L6.5 15H8.6L9.5 12.8ZM12 5.98L13.87 11H10.13L12 5.98Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_433_240">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      }
    />
  );
};

export default IconTextFormat;
