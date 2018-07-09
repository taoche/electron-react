import { css } from 'emotion';
import * as React from 'react';

const noteStyle = props => css`
  width: 20%;
  height: 160px;
  float: left;
  margin: 25px 15px;
  border-radius: 5px;
  background-color: rgb(${props.color.r}, ${props.color.g}, ${props.color.b});

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px h3 {
    font-family: sans-serif;
  }
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 0, 0, 0.1) inset;
`;

export default props => (
  <div className={noteStyle(props)}>
    <h3>{props.text}</h3>
  </div>
);
