import Icon, { getCssFillClassName } from '../Icon';
import IconProps from '../IconProps';

const IconTag = ({ className, color }: IconProps) => {
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
          <path
            className={cssFillClassName}
            d="M20 10V8H16V4H14V8H10V4H8V8H4V10H8V14H4V16H8V20H10V16H14V20H16V16H20V14H16V10H20ZM14 14H10V10H14V14Z"
            fill="black"
          />
        </svg>
      }
    />
  );
};

export default IconTag;
