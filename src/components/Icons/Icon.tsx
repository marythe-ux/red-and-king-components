import { css } from '@emotion/css';

const cssClassName = css`
  align-items: center;
  aspect-ratio: 1 / 1;
  display: flex;
  justify-content: center;
  vertical-align: middle;
  svg {
    width: 100%;
    height: 100%;
  }
`;

export const getCssFillClassName = (color?: string) =>
  color
    ? css`
        fill: ${color};
      `
    : '';

const Icon = ({ svg }: { svg: React.ReactNode }) => (
  <div className={`${cssClassName} topdone-icon`}>{svg}</div>
);

export default Icon;
