import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const Segment = ({ children }) => (
  <div className="segment">
    {children}
  </div>
);

export default Segment;
