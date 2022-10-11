import Icon, { getCssFillClassName } from '../Icon';
import IconProps from '../IconProps';

const IconFlag = ({ className, color }: IconProps) => {
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
          <g clip-path="url(#clip0_433_105)">
            <path
              className={cssFillClassName}
              d="M14.4 6L14 4H5V21H7V14H12.6L13 16H20V6H14.4Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_433_105">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      }
    />
  );
};

export default IconFlag;
