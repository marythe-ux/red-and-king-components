import Icon, { getCssFillClassName } from '../Icon';
import IconProps from '../IconProps';

const IconAmpStories = ({ className, color }: IconProps) => {
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
          <g clip-path="url(#clip0_433_22)">
            <path
              className={cssFillClassName}
              d="M17 4H7V19H17V4Z"
              fill="black"
            />
            <path
              className={cssFillClassName}
              d="M5 6H3V17H5V6Z"
              fill="black"
            />
            <path
              className={cssFillClassName}
              d="M21 6H19V17H21V6Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_433_22">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      }
    />
  );
};
export default IconAmpStories;
