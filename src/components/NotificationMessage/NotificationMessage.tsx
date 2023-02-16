// import PropTypes from 'prop-types';
import React from 'react';

type IProp = {
  children?: JSX.Element;
  message: string;
};

export const NotificationMessage: React.FC<IProp> = ({ message }) => {
  return <p>{message}</p>;
};

// NotificationMessage.propTypes = {
//   message: PropTypes.string.isRequired,
// };
