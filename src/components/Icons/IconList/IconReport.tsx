import Icon, { getCssFillClassName } from '../Icon';
import IconProps from '../IconProps';

const IconReport = ({ className, color }: IconProps) => {
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
          <g clip-path="url(#clip0_433_198)">
            <path
              className={cssFillClassName}
              d="M15.73 3H8.27L3 8.27V15.73L8.27 21H15.73L21 15.73V8.27L15.73 3ZM12 17.3C11.28 17.3 10.7 16.72 10.7 16C10.7 15.28 11.28 14.7 12 14.7C12.72 14.7 13.3 15.28 13.3 16C13.3 16.72 12.72 17.3 12 17.3ZM13 13H11V7H13V13Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_433_198">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      }
    />
  );
};

export default IconReport;
