import React from 'react';

import search from '../assets/img/searchInput.png';
import notification from '../assets/img/notification.png';
import profile from '../assets/img/userProfile.png';


class Header extends React.Component {
  render() {
    return(
      <div className={`header ${this.props.darkTheme ? 'dark' : ''}`}>
          <div className="logo">
            <span>LOGO HERE</span>
          </div>

          <div className="control">
            <div className="searchButton">
              <input type="text" />
              <img src={search} alt="search" />
            </div>

            <button className="notificationsButton"><img src={notification} alt="notifications" /></button>
            <button className="profileButton"><img src={profile} alt="profile" /></button>
          </div>
      </div>
    );
  }
}

export { Header };