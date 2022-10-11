import * as icons from '.';
import { css } from '@emotion/css';

const cssClassName = css`
  display: flex;
  flex-wrap: wrap;
  margin: -4px;

  .iconInfo {
    margin: 4px;
    padding: 8px 16px;
    background-color: #ebebeb;
    border-radius: 5px;
    width: 110px;
    text-align: center;
    font-size: 10px;
  }
  .iconContainer {
    background-color: #ffffff;
    width: 50px;
    margin: 0 auto 8px auto;
  }
`;

const IconList = () => {
  return (
    <>
      <h1>Icons</h1>
      <div className={cssClassName}>
        {Object.entries(icons).map(([name, Icon], i) => (
          <div className="iconInfo" key={i}>
            <div className="iconContainer">{<Icon color="#333333" />}</div>
            {name}
          </div>
        ))}
      </div>
    </>
  );
};

export default IconList;
