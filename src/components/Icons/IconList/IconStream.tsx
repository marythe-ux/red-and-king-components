import Icon, { getCssFillClassName } from '../Icon';
import IconProps from '../IconProps';

const IconStream = ({ className, color }: IconProps) => {
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
          <g clip-path="url(#clip0_433_231)">
            <path
              className={cssFillClassName}
              d="M20 14C21.1046 14 22 13.1046 22 12C22 10.8954 21.1046 10 20 10C18.8954 10 18 10.8954 18 12C18 13.1046 18.8954 14 20 14Z"
              fill="black"
            />
            <path
              className={cssFillClassName}
              d="M4 14C5.10457 14 6 13.1046 6 12C6 10.8954 5.10457 10 4 10C2.89543 10 2 10.8954 2 12C2 13.1046 2.89543 14 4 14Z"
              fill="black"
            />
            <path
              className={cssFillClassName}
              d="M12 22C13.1046 22 14 21.1046 14 20C14 18.8954 13.1046 18 12 18C10.8954 18 10 18.8954 10 20C10 21.1046 10.8954 22 12 22Z"
              fill="black"
            />
            <path
              className={cssFillClassName}
              d="M10.05 8.58998L6.02999 4.54998H6.01999L5.70999 4.22998L4.28999 5.63998L8.30999 9.68998L8.31999 9.67998L8.62999 9.99998L10.05 8.58998ZM13.943 8.61698L18.348 4.22498L19.76 5.63998L15.355 10.033L13.943 8.61698ZM10.01 15.36L8.58999 13.95L4.55999 17.96L4.23999 18.29L5.64999 19.7L9.67999 15.68L10.01 15.36ZM19.76 18.3L15.77 14.29L15.41 13.94L14 15.35L17.99 19.36L18.34 19.71L19.76 18.3Z"
              fill="black"
            />
            <path
              className={cssFillClassName}
              d="M12 6C13.1046 6 14 5.10457 14 4C14 2.89543 13.1046 2 12 2C10.8954 2 10 2.89543 10 4C10 5.10457 10.8954 6 12 6Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_433_231">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      }
    />
  );
};

export default IconStream;
