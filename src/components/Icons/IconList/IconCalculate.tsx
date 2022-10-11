import Icon, { getCssFillClassName } from '../Icon';
import IconProps from '../IconProps';

const IconCalculate = ({ className, color }: IconProps) => {
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
          <g clip-path="url(#clip0_433_57)">
            <path
              className={cssFillClassName}
              d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM13.03 7.06L14.09 6L15.5 7.41L16.91 6L17.97 7.06L16.56 8.47L17.97 9.88L16.91 10.94L15.5 9.54L14.09 10.95L13.03 9.89L14.44 8.48L13.03 7.06ZM6.25 7.72H11.25V9.22H6.25V7.72ZM11.5 16H9.5V18H8V16H6V14.5H8V12.5H9.5V14.5H11.5V16ZM18 17.25H13V15.75H18V17.25ZM18 14.75H13V13.25H18V14.75Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_433_57">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      }
    />
  );
};

export default IconCalculate;
