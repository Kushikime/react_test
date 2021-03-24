import React from 'react';

class Status extends React.Component {
  render() {
    return(
      <div className="status">
          <span className="blockTitle">Status</span>

          <div className="score propBlock">
                <span className="title">Your score</span>
                <span className="value">450</span>
          </div>

          <div className="views propBlock">
                <span className="title">Profile views</span>
                <span className="value red">53</span>
          </div>
      </div>
    );
  }
}

export { Status };