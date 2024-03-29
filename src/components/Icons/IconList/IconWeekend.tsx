import Icon, { getCssFillClassName } from '../Icon';
import IconProps from '../IconProps';

const IconWeekend = ({ className, color }: IconProps) => {
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
          <g clip-path="url(#clip0_433_255)">
            <path
              className={cssFillClassName}
              d="M21 10C19.9 10 19 10.9 19 12V15H5V12C5 10.9 4.11 10 3 10C1.89 10 1 10.9 1 12V17C1 18.1 1.9 19 3 19H21C22.1 19 23 18.1 23 17V12C23 10.9 22.1 10 21 10ZM18 5H6C4.9 5 4 5.9 4 7V9.15C5.16 9.56 6 10.67 6 11.96V14H18V11.97C18 10.67 18.84 9.57 20 9.16V7C20 5.9 19.1 5 18 5Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_433_255">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      }
    />
  );
};

export default IconWeekend;
