import Icon, { getCssFillClassName } from '../Icon';
import IconProps from '../IconProps';

const IconDeleteSweep = ({ className, color }: IconProps) => {
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
          <g clip-path="url(#clip0_433_80)">
            <path
              className={cssFillClassName}
              d="M15 16H19V18H15V16ZM15 8H22V10H15V8ZM15 12H21V14H15V12ZM3 18C3 19.1 3.9 20 5 20H11C12.1 20 13 19.1 13 18V8H3V18ZM14 5H11L10 4H6L5 5H2V7H14V5Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_433_80">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      }
    />
  );
};

export default IconDeleteSweep;
