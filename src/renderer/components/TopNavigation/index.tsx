import { css } from 'emotion';
import { inject, observer } from 'mobx-react';
import * as React from 'react';

import { Link } from 'react-router-dom';

import CustomButton, { blueButton, orangeButton } from '../../components/CustomButton';
import { AppStore } from '../../stores';
import logo from './logo.svg';

const appStyles = css`
  font-family: sans-serif;
  text-align: center;

  img {
    animation: App-logo-spin infinite 20s linear;
    height: 80px;
  }

  header {
    background-color: #222;
    height: 150px;
    padding: 20px;
    color: white;
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

interface IAppProps {
  appStore?: AppStore;
}

@inject('appStore')
@observer
class App extends React.Component<IAppProps> {
  public render() {
    return (
      <div className={appStyles}>
        <Link to="/">Notes page</Link>
        <p />
        <Link to="/notecount">Counts page</Link>
        <p />
        <header>
          <img src={logo} alt="logo" />
          <div>
            <CustomButton
              title="Add a latin note"
              colors={blueButton}
              onClickHandler={() => {
                this.props.appStore!.addLatinNoteAsync();
              }}
            />
            <CustomButton
              title="Add a counter note"
              onClickHandler={() => {
                this.props.appStore!.addCounterNote();
              }}
              colors={orangeButton}
            />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
