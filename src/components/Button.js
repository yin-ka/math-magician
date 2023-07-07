import React from 'react';
import PropTypes from 'prop-types';

function Button({ title, cname, onClick }) {
  return (
    <button type="button" className={cname} onClick={(e) => onClick(e)}>{title}</button>
  );
}
Button.defaultProps = {
  cname: '',
  onClick: {},
};
Button.propTypes = {
  title: PropTypes.string.isRequired,
  cname: PropTypes.string,
  onClick: PropTypes.func,
};
export default Button;
