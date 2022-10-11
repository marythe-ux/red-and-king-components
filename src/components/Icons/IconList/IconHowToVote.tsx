import Icon, { getCssFillClassName } from '../Icon';
import IconProps from '../IconProps';

const IconHowToVote = ({ className, color }: IconProps) => {
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
          <g clip-path="url(#clip0_433_122)">
            <path
              className={cssFillClassName}
              d="M18 13H17.32L15.32 15H17.23L19 17H5L6.78 15H8.83L6.83 13H6L3 16V20C3 21.1 3.89 22 4.99 22H19C20.1 22 21 21.11 21 20V16L18 13ZM17 7.95004L12.05 12.9L8.51 9.36004L13.46 4.41004L17 7.95004ZM12.76 2.29004L6.39 8.66004C6 9.05004 6 9.68004 6.39 10.07L11.34 15.02C11.73 15.41 12.36 15.41 12.75 15.02L19.11 8.66004C19.5 8.27004 19.5 7.64004 19.11 7.25004L14.16 2.30004C13.78 1.90004 13.15 1.90004 12.76 2.29004Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_433_122">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      }
    />
  );
};

export default IconHowToVote;
