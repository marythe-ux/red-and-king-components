import Icon, { getCssFillClassName } from '../Icon';
import IconProps from '../IconProps';

const IconAddLink = ({ className, color }: IconProps) => {
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
          <g clip-path="url(#clip0_433_19)">
            <path
              className={cssFillClassName}
              d="M8 11H16V13H8V11ZM20.1 12H22C22 9.24 19.76 7 17 7H13V8.9H17C18.71 8.9 20.1 10.29 20.1 12ZM3.9 12C3.9 10.29 5.29 8.9 7 8.9H11V7H7C4.24 7 2 9.24 2 12C2 14.76 4.24 17 7 17H11V15.1H7C5.29 15.1 3.9 13.71 3.9 12ZM19 12H17V15H14V17H17V20H19V17H22V15H19V12Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_433_19">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      }
    />
  );
};

export default IconAddLink;
