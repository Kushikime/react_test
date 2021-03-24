import React from 'react';
import { Earnings } from './Earnings';
import { LatestNotifications } from './LatestNotifications';
import { Status } from './Status';

class Content extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div className={`homeContent ${this.props.darkTheme ? 'darkContent' : ''}`}>
          
        <div className="left">
            <LatestNotifications />
        </div>

        <div className="right">
            <Status />

            <Earnings />
        </div>

      </div>
    );
  }
}

export { Content };