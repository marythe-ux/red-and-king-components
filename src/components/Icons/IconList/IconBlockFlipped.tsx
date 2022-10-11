import Icon, { getCssFillClassName } from '../Icon';
import IconProps from '../IconProps';

const IconBlockFlipped = ({ className, color }: IconProps) => {
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
          <g clip-path="url(#clip0_433_50)">
            <path
              className={cssFillClassName}
              d="M22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12ZM5.7 7.1L16.9 18.3C15.6 19.4 13.9 20 12 20C7.6 20 4 16.4 4 12C4 10.1 4.6 8.4 5.7 7.1ZM20 12C20 13.9 19.4 15.6 18.3 16.9L7.1 5.7C8.4 4.6 10.1 4 12 4C16.4 4 20 7.6 20 12Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_433_50">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      }
    />
  );
};

export default IconBlockFlipped;
