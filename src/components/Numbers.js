import React from 'react';
import '../App.css';

const Numbers = ({ numberName, numberNamePrint }) => {
  if (numberNamePrint === 0) numberNamePrint = '';

  return <div className={numberName}>{numberNamePrint}</div>;
};

Numbers.defaultProps = {
  numberName: 'n0'
};

export default Numbers;
