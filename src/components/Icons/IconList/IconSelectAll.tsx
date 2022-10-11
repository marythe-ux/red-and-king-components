import Icon, { getCssFillClassName } from '../Icon';
import IconProps from '../IconProps';

const IconSelectAll = ({ className, color }: IconProps) => {
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
          <g clip-path="url(#clip0_433_210)">
            <path
              className={cssFillClassName}
              d="M3 5H5V3C3.9 3 3 3.9 3 5ZM3 13H5V11H3V13ZM7 21H9V19H7V21ZM3 9H5V7H3V9ZM13 3H11V5H13V3ZM19 3V5H21C21 3.9 20.1 3 19 3ZM5 21V19H3C3 20.1 3.9 21 5 21ZM3 17H5V15H3V17ZM9 3H7V5H9V3ZM11 21H13V19H11V21ZM19 13H21V11H19V13ZM19 21C20.1 21 21 20.1 21 19H19V21ZM19 9H21V7H19V9ZM19 17H21V15H19V17ZM15 21H17V19H15V21ZM15 5H17V3H15V5ZM7 17H17V7H7V17ZM9 9H15V15H9V9Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_433_210">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      }
    />
  );
};

export default IconSelectAll;
