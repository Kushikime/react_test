import React from 'react';

export const Footer = () => {
  const date = (new Date().getFullYear()); //get current year

  return(
    <div className="footer">
        <span>Copyright © {date} | All Rights Reserved</span>
    </div>
  );
}