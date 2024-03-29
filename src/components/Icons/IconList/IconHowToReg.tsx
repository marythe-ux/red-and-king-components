import Icon, { getCssFillClassName } from '../Icon';
import IconProps from '../IconProps';

const IconHowToReg = ({ className, color }: IconProps) => {
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
          <g clip-path="url(#clip0_433_117)">
            <path
              className={cssFillClassName}
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9 17L12 14.06C11.61 14.02 11.32 14 11 14C8.33 14 3 15.34 3 18V20H12L9 17ZM11 12C13.21 12 15 10.21 15 8C15 5.79 13.21 4 11 4C8.79 4 7 5.79 7 8C7 10.21 8.79 12 11 12Z"
              fill="black"
            />
            <path
              className={cssFillClassName}
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.47 20.5L12 17L13.4 15.59L15.47 17.67L20.6 12.5L22 13.91L15.47 20.5Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_433_117">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      }
    />
  );
};

export default IconHowToReg;
