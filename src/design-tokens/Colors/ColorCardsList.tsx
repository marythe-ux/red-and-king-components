import styled from '@emotion/styled';

interface ColorCardsListProps {
  colorName: string;
  children: React.ReactNode;
}

const ColorCardsListStyled = styled('div')`
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
  <ColorCardsListStyled>
    <p className="title">{colorName}</p>
    <div className="container">{children}</div>
  </ColorCardsListStyled>
);

export default ColorCardsList;
