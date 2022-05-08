// import React from 'react';
import styled from '@emotion/styled';
import designTokens from '../../../tokens/design-tokens.json';
// import css from '@emotion/css';

const ColorCard = styled('span')`
  width: 40px;
  height: 40px;
  display: inline-block;
  margin: 2px;
  background-color: ${({ color }) => color};
  border: solid 1px #ccc;
`;

const printColor = (
  colorName: string,
  colorData: any
): JSX.Element | JSX.Element[] => {
  if (colorData.type === 'color') {
    return (
      <>
        <ColorCard color={colorData.value} /> {colorName}
      </>
    );
  }

  return Object.entries(colorData).map(([name, value]) => (
    <div>
      <div>{printColor(`${colorName} ${name}`, value)}</div>
    </div>
  ));
};

const Colors = () => {
  const colors = designTokens.color;

  return <div>{printColor('', colors)}</div>;
};

export default Colors;
