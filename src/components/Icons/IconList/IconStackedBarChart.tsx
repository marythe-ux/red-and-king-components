import Icon, { getCssFillClassName } from '../Icon';
import IconProps from '../IconProps';

const IconStackedBarChart = ({ className, color }: IconProps) => {
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
          <g clip-path="url(#clip0_433_228)">
            <path
              className={cssFillClassName}
              d="M6 10H9V20H6V10ZM6 5H9V9H6V5ZM16 16H19V20H16V16ZM16 13H19V15H16V13ZM11 13H14V20H11V13ZM11 9H14V12H11V9Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_433_228">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      }
    />
  );
};

export default IconStackedBarChart;
