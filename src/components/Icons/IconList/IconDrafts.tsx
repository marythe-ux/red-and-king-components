import Icon, { getCssFillClassName } from '../Icon';
import IconProps from '../IconProps';

const IconDrafts = ({ className, color }: IconProps) => {
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
          <g clip-path="url(#clip0_433_83)">
            <path
              className={cssFillClassName}
              d="M21.99 8C21.99 7.28 21.62 6.65 21.05 6.3L12 1L2.95 6.3C2.38 6.65 2 7.28 2 8V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18L21.99 8ZM12 13L3.74 7.84L12 3L20.26 7.84L12 13Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_433_83">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      }
    />
  );
};

export default IconDrafts;
