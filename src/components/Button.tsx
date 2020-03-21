import React from 'react';
import PropTypes, { InferProps } from 'prop-types';

const styles: { [name: string]: React.CSSProperties } = {
  button: {
    margin: '0 8px',
    userSelect: 'none',
    cursor: 'pointer',
    outline: 'none',
    border: 'none',
    whiteSpace: 'nowrap',
    textAlign: 'center',
    minWidth: '64px',
    lineHeight: '36px',
    padding: '0 16px',
    borderRadius: '4px',
    overflow: 'visible',
    color: 'inherit',
    backgroundColor: 'transparent',
    fontFamily: "Roboto,'Helvetica Neue',sans-serif",
    fontSize: '14px',
    fontWeight: 500,
  },
};

function Button({ children }: InferProps<typeof Button.propTypes>): React.ReactElement {
  return <button style={styles.button}>{children}</button>;
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
