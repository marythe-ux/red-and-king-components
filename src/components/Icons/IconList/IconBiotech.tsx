import Icon, { getCssFillClassName } from '../Icon';
import IconProps from '../IconProps';

const IconBiotech = ({ className, color }: IconProps) => {
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
          <g clip-path="url(#clip0_433_39)">
            <path
              className={cssFillClassName}
              d="M7 18.9999C5.9 18.9999 5 19.8999 5 20.9999H19C19 19.8999 18.1 18.9999 17 18.9999H13V16.9999H16C17.1 16.9999 18 16.0999 18 14.9999H10C8.34 14.9999 7 13.6599 7 11.9999C7 10.9099 7.59 9.95988 8.46 9.43988C8.17 9.02988 8 8.53988 8 7.99988C8 7.78988 8.04 7.57988 8.09 7.37988C6.28 8.12988 5 9.91988 5 11.9999C5 14.7599 7.24 16.9999 10 16.9999V18.9999H7Z"
              fill="black"
            />
            <path
              className={cssFillClassName}
              d="M10.56 5.51C11.91 5.54 13 6.64 13 8C13 8.75 12.67 9.41 12.15 9.87L12.74 11.49L13.68 11.15L14.02 12.09L15.9 11.41L15.56 10.47L16.5 10.13L13.76 2.6L12.82 2.94L12.48 2L10.6 2.68L10.94 3.62L10 3.97L10.56 5.51Z"
              fill="black"
            />
            <path
              className={cssFillClassName}
              d="M10.5 9.5C11.3284 9.5 12 8.82843 12 8C12 7.17157 11.3284 6.5 10.5 6.5C9.67157 6.5 9 7.17157 9 8C9 8.82843 9.67157 9.5 10.5 9.5Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_433_39">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      }
    />
  );
};

export default IconBiotech;
