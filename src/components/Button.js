import React from 'react';
import PropTypes from 'prop-types';

function Button({ title, cname }) {
  return (
    <button type="button" className={cname}>{title}</button>
  );
}
Button.defaultProps = {
  cname: '',
};
Button.propTypes = {
  title: PropTypes.string.isRequired,
  cname: PropTypes.string,
};
export default Button;
