import React from 'react';
import { useSelector } from 'react-redux';

export const Earnings = () => {
  //IF WE WILL GET A REST API METHOD JUST WILL UPDATE THE STATE TO CURRENT MONTH VALUES
  const earnings = useSelector(state => state.app.userEarnings);
  

  return(
    <div className="earnings">
        <span className="blockTitle">Earnings</span>

        <div className="total propBlock">
              <span className="title">Total</span>
              <span className="value green">{earnings.total} €</span>
        </div>

        <div className="monthTotal propBlock">
              <span className="title">Your earnings on January</span>
              <span className="value green">{earnings.thisMonth} €</span>
        </div>
    </div>
  );
}
