import Icon, { getCssFillClassName } from '../Icon';
import IconProps from '../IconProps';

const IconFontDownload = ({ className, color }: IconProps) => {
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
          <g clip-path="url(#clip0_433_108)">
            <path
              className={cssFillClassName}
              d="M9.93 13.5H14.07L12 7.98L9.93 13.5ZM20 2H4C2.9 2 2 2.9 2 4V20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20V4C22 2.9 21.1 2 20 2ZM15.95 18.5L14.81 15.5H9.17L8.05 18.5H5.96L11.07 5.5H12.93L18.04 18.5H15.95Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_433_108">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      }
    />
  );
};

export default IconFontDownload;
