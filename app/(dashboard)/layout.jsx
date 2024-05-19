import React from 'react';
import Navbar from '../components/navbar';

const DashBoardLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default DashBoardLayout;
