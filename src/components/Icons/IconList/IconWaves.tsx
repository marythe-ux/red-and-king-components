import Icon, { getCssFillClassName } from '../Icon';
import IconProps from '../IconProps';

const IconWaves = ({ className, color }: IconProps) => {
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
            d="M17 16.99C15.65 16.99 14.8 17.41 14.05 17.79C13.4 18.12 12.87 18.39 12 18.39C11.1 18.39 10.6 18.14 9.95 17.79C9.2 17.41 8.38 16.99 7 16.99C5.62 16.99 4.8 17.41 4.05 17.79C3.4 18.12 2.88 18.39 2 18.39V20.34C3.35 20.34 4.2 19.92 4.95 19.54C5.6 19.21 6.12 18.94 7 18.94C7.88 18.94 8.4 19.19 9.05 19.54C9.8 19.92 10.62 20.34 12 20.34C13.38 20.34 14.2 19.92 14.95 19.54C15.6 19.21 16.13 18.94 17 18.94C17.9 18.94 18.4 19.19 19.05 19.54C19.8 19.92 20.63 20.34 22 20.34V18.39C21.1 18.39 20.6 18.14 19.95 17.79C19.2 17.41 18.35 16.99 17 16.99ZM17 12.54C15.65 12.54 14.8 12.97 14.05 13.34C13.4 13.66 12.87 13.94 12 13.94C11.1 13.94 10.6 13.69 9.95 13.34C9.2 12.96 8.38 12.54 7 12.54C5.62 12.54 4.8 12.97 4.05 13.34C3.4 13.66 2.88 13.94 2 13.94V15.89C3.35 15.89 4.2 15.46 4.95 15.09C5.6 14.74 6.1 14.49 7 14.49C7.9 14.49 8.4 14.74 9.05 15.09C9.8 15.47 10.62 15.89 12 15.89C13.38 15.89 14.2 15.46 14.95 15.09C15.6 14.74 16.1 14.49 17 14.49C17.9 14.49 18.4 14.74 19.05 15.09C19.8 15.47 20.63 15.89 22 15.89V13.94C21.1 13.94 20.6 13.69 19.95 13.34C19.2 12.96 18.35 12.54 17 12.54ZM19.95 4.46003C19.2 4.08003 18.37 3.66003 17 3.66003C15.63 3.66003 14.8 4.08003 14.05 4.46003C13.4 4.78003 12.87 5.06003 12 5.06003C11.1 5.06003 10.6 4.81003 9.95 4.46003C9.2 4.09003 8.38 3.66003 7 3.66003C5.62 3.66003 4.8 4.08003 4.05 4.46003C3.4 4.79003 2.88 5.06003 2 5.06003V6.99003C3.35 6.99003 4.2 6.56003 4.95 6.19003C5.6 5.86003 6.12 5.59003 7 5.59003C7.88 5.59003 8.4 5.84003 9.05 6.19003C9.8 6.57003 10.62 6.99003 12 6.99003C13.38 6.99003 14.2 6.56003 14.95 6.19003C15.6 5.87003 16.13 5.59003 17 5.59003C17.9 5.59003 18.4 5.84003 19.05 6.19003C19.8 6.57003 20.63 6.99003 22 6.99003V5.04003C21.1 5.04003 20.6 4.79003 19.95 4.46003ZM17 8.09003C15.65 8.09003 14.8 8.52003 14.05 8.89003C13.4 9.24003 12.9 9.49003 12 9.49003C11.1 9.49003 10.6 9.24003 9.95 8.89003C9.2 8.51003 8.38 8.09003 7 8.09003C5.62 8.09003 4.8 8.52003 4.05 8.89003C3.4 9.24003 2.9 9.49003 2 9.49003V11.44C3.35 11.44 4.2 11.01 4.95 10.64C5.6 10.32 6.13 10.04 7 10.04C7.87 10.04 8.4 10.29 9.05 10.64C9.8 11.02 10.62 11.44 12 11.44C13.38 11.44 14.2 11.01 14.95 10.64C15.6 10.32 16.13 10.04 17 10.04C17.9 10.04 18.4 10.29 19.05 10.64C19.8 11.02 20.63 11.44 22 11.44V9.49003C21.1 9.49003 20.6 9.24003 19.95 8.89003C19.2 8.51003 18.35 8.09003 17 8.09003Z"
            fill="black"
          />
        </svg>
      }
    />
  );
};

export default IconWaves;
