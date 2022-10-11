import Icon, { getCssFillClassName } from '../Icon';
import IconProps from '../IconProps';

const IconAdd = ({ className, color }: IconProps) => {
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
            d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"
            fill="black"
          />
        </svg>
      }
    />
  );
};

export default IconAdd;
