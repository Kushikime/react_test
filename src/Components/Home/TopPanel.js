import React, { useState, Switch } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import arrowDown from '../../assets/img/arrowDown.png';

export const TopPanel = () => {
  const dispatch = useDispatch();
  const [topControlMenu, setTopControl] = useState(false);
  const userState = useSelector(state => state.app.userState);
  const darkTheme = useSelector(state => state.app.darkTheme);

  const toggleTopControl = () =>{
      setTopControl(!topControlMenu);
  };

  const changeUserState = () =>{
    if(userState === 'offline'){
      dispatch({type: 'CHANGE_USER_STATE', payload: 'online'});
    } else{
      dispatch({type: 'CHANGE_USER_STATE', payload: 'offline'});
    }
  };

  

  const changeTheme = () =>{
    if(darkTheme === true){
      dispatch({type: 'CHANGE_THEME', payload: false});
    } else {
      dispatch({type: 'CHANGE_THEME', payload: true});
    }
  }

  
  return(
    <div className={`topPanel ${topControlMenu ? 'closed' : ''}`}>
      <div className="top">
          <div className="toggleControl" onClick={toggleTopControl}>
            <img src={arrowDown} alt="3232" />
          </div>

        
                
          <div className="info">
            <ul>
              <li>
                <span className="prop">NEW REQUEST</span>
                <span className="value">5</span>
              </li>

              <li>
                <span className="prop">PROCESSING</span>
                <span className="value">4/8</span>
              </li>

              <li>
                <span className="prop">RATING</span>
                <span className="value">4.9</span>
              </li>

              <li>
                <span className="prop">PLAN</span>
                <span className="value">Premium</span>
              </li>
            </ul>
          </div>


          <div className="switchTheme">
              <span>SWITCH(BASIC)</span>
              <label className="switch">
                <input type="checkbox" onClick={changeTheme}/>
                <span className="slider round"></span>
              </label>
          </div>
          
      </div>


      <div className="switchControl">
        <div className="userStatus" onClick={changeUserState}>
          <span className="prop">Status:</span>
          <span className={`value ${userState === 'online' ? 'online':'offline'}`}>{userState}</span>
        </div>

        <div className="lastScan">
          <span className="prop">Last scan 25. Oct 2020</span>
        </div>
      </div>
    </div>
  );
}
