import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const Segment = ({ children }) => (
  <div className="segment">
    {children}
  </div>
);

Segment.propTypes = {
  children: PropTypes.node.isRequired
}

export default Segment;
