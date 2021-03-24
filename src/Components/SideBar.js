import React from 'react';
import home from '../assets/img/home.png';
import messages from '../assets/img/messages.png';
import search from '../assets/img/search.png';
import favourites from '../assets/img/favourites.png';
import circle from '../assets/img/circle.png';
import tasks from '../assets/img/tasks.png';
import settings from '../assets/img/settings.png';
class SideBar extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      menuState: false
    }
  }


  toggleMenu = () =>{
    this.setState({
      menuState: !this.state.menuState
    });
  };


  render() {
    return(
      <div className={`sideBar ${this.state.menuState ? 'menuActive' : ''} ${this.props.darkTheme ? 'dark' : ''}`}>
        <div className="top">
          <button className="menuButton" onClick={this.toggleMenu}>
              <span></span>
          </button>

          <ul className="menu">
            <li>
              <img src={home} alt="#" />
              <span className="menuTitle">Home</span>
            </li>

            <li>
              <img src={messages} alt="#" />
              <span className="menuTitle">Messages</span>
            </li>

            <li>
              <img src={search} alt="#" />
              <span className="menuTitle">Search</span>
            </li>

            <li>
              <img src={favourites} alt="#" />
              <span className="menuTitle">Favourites</span>
            </li>

            <li>
              <img src={circle} alt="#" />
              <span className="menuTitle">Other</span>
            </li>

            <li>
              <img src={tasks} alt="#" />
              <span className="menuTitle">Tasks</span>
            </li>
          </ul>
        </div>

        <div className="bottom">
            <div className="settings">
              <img src={settings} alt="#" />
              <span className="menuTitle">Settings</span>
            </div>
        </div>
          
      </div>
    );
  }
}

export { SideBar };