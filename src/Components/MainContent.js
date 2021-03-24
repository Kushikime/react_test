import React from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import { HomeContent } from './Home/HomeContent';

class MainContent extends React.Component {
  render() {
    return(
      <div className="mainContent">
          <Header darkTheme={this.props.darkTheme} />

          <HomeContent darkTheme={this.props.darkTheme} />

          <Footer darkTheme={this.props.darkTheme} />
      </div>
    );
  }
}

export { MainContent };