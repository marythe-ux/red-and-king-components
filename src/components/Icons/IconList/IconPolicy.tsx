import Icon, { getCssFillClassName } from '../Icon';
import IconProps from '../IconProps';

const IconPolicy = ({ className, color }: IconProps) => {
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
          <g clip-path="url(#clip0_433_168)">
            <path
              className={cssFillClassName}
              d="M21 5L12 1L3 5V11C3 16.55 6.84 21.74 12 23C14.3 22.44 16.33 21.1 17.88 19.29L14.76 16.17C12.82 17.46 10.18 17.24 8.47 15.53C6.52 13.58 6.52 10.41 8.47 8.46C10.42 6.51 13.59 6.51 15.54 8.46C17.25 10.17 17.46 12.81 16.18 14.75L19.08 17.65C20.29 15.69 21 13.38 21 11V5Z"
              fill="black"
            />
            <path
              className={cssFillClassName}
              d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_433_168">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      }
    />
  );
};

export default IconPolicy;
