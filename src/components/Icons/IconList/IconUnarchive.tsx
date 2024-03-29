import Icon, { getCssFillClassName } from '../Icon';
import IconProps from '../IconProps';

const IconUnarchive = ({ className, color }: IconProps) => {
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
          <g clip-path="url(#clip0_433_243)">
            <path
              className={cssFillClassName}
              d="M20.55 5.22L19.16 3.54C18.88 3.21 18.47 3 18 3H6C5.53 3 5.12 3.21 4.85 3.55L3.46 5.22C3.17 5.57 3 6.01 3 6.5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V6.5C21 6.01 20.83 5.57 20.55 5.22ZM12 9.5L17.5 15H14V17H10V15H6.5L12 9.5ZM5.12 5L5.94 4H17.94L18.87 5H5.12Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_433_243">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      }
    />
  );
};

export default IconUnarchive;
