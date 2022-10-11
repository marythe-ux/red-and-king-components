import Icon, { getCssFillClassName } from '../Icon';
import IconProps from '../IconProps';

const IconForward = ({ className, color }: IconProps) => {
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
          <g clip-path="url(#clip0_433_111)">
            <path
              className={cssFillClassName}
              d="M12 8V4L20 12L12 20V16H4V8H12Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_433_111">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      }
    />
  );
};

export default IconForward;
