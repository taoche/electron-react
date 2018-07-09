import { css } from 'emotion';
import * as React from 'react';


export const blueButton = {
  backgroundColor: '#55acee',
  boxShadow: '#3C93D5',
  hoverBackgroundColor: '#6FC6FF',
};

export const orangeButton = {
  backgroundColor: '#e67e22',
  boxShadow: '#CD6509',
  hoverBackgroundColor: '#FF983C',
};

const buttonStyle = props => css`
  body {
    font-family: 'sans-serif';
  }
  display: inline;

  .btn {
    border-radius: 5px;
    padding: 15px;
    font-size: 22px;
    margin: 10px;
    color: #fff;
    display: inline-block;
    background-color: ${props.colors.backgroundColor};
    box-shadow: 0px 5px 0px 0px ${props.colors.boxShadow};
  }

  .btn:hover {
    background-color: ${props.colors.hoverBackgroundColor};
  }
`;

export default props => {
  return (
    <div className={buttonStyle(props)} onClick={props.onClickHandler}>
      <div className="btn">{props.title}</div>
    </div>
  );
};
