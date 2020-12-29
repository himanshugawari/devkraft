import React from 'react';
import { useSelector } from 'react-redux';

const Alert = () => {
  const error = useSelector((state) => state.error);
  return (
    alert !== null && (
      <div className={`alert alert-${error} text-center`}>{error}</div>
    )
  );
};

export default Alert;
