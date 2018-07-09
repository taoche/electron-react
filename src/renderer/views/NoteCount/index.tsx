import { css } from 'emotion';
import { inject, observer } from 'mobx-react';
import * as React from 'react';

import { AppStore } from '../../stores';

const noteCountStyles = css`
  font-family: sans-serif;
  text-align: center;
`;

interface INoteCountProps {
  path?: string;
  appStore?: AppStore;
}

@inject('appStore')
@observer
class NoteCount extends React.Component<INoteCountProps, any> {
  public render() {
    return (
      <div className={noteCountStyles}>
        <h1>You have created {this.props.appStore!.notescount} notes.</h1>
      </div>
    );
  }
}

export default NoteCount;
