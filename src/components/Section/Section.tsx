// import PropTypes from 'prop-types';
import { Title } from './Section.styled';
import React from 'react';

type IProp = {
  title: string;
  children?: JSX.Element;
};

export const Section: React.FC<IProp> = ({ title, children }: IProp) => {
  return (
    <section>
      {title && <Title>{title}</Title>}
      {children}
    </section>
  );
};

// Section.propTypes = {
//   title: PropTypes.string,
//   children: PropTypes.element.isRequired,
// };
