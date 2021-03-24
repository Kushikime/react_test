import React from 'react';
import { Content } from './Content';
import { TopPanel } from './TopPanel';

class HomeContent extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div className="content">
          <TopPanel />
          
          <Content  darkTheme={this.props.darkTheme} />
      </div>
    );
  }
}

export { HomeContent };