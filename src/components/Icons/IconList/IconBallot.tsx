import Icon, { getCssFillClassName } from '../Icon';
import IconProps from '../IconProps';

const IconBallot = ({ className, color }: IconProps) => {
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
          <g clip-path="url(#clip0_433_36)">
            <path
              className={cssFillClassName}
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13 9.5H18V7.5H13V9.5ZM13 16.5H18V14.5H13V16.5ZM19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H19C20.1 3 21 3.9 21 5V19C21 20.1 20.1 21 19 21ZM6 11H11V6H6V11ZM7 7H10V10H7V7ZM6 18H11V13H6V18ZM7 14H10V17H7V14Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_433_36">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      }
    />
  );
};

export default IconBallot;
