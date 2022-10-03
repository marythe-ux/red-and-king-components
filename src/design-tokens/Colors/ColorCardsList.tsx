import { css } from '@emotion/css';
interface ColorCardsListProps {
  colorName: string;
  children: React.ReactNode;
}

const cssClassName = css`
  align-items: center;
  padding: 4px;
  margin: 0 10px;
  display: flex;
  flex-wrap: wrap;

  & .title {
    width: 100%;
    margin: 10px 0;
  }

  & .container {
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
    display: flex;
  }
`;

const ColorCardsList = ({ colorName, children }: ColorCardsListProps) => (
  <div className={cssClassName}>
    <p className="title">{colorName}</p>
    <div className="container">{children}</div>
  </div>
);

export default ColorCardsList;
