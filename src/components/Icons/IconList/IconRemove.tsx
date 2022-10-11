import Icon, { getCssFillClassName } from '../Icon';
import IconProps from '../IconProps';

const IconRemove = ({ className, color }: IconProps) => {
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
          <g clip-path="url(#clip0_433_183)">
            <path
              className={cssFillClassName}
              d="M19 13H5V11H19V13Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_433_183">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      }
    />
  );
};

export default IconRemove;
