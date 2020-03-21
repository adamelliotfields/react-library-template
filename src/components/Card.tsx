import React from 'react';
import PropTypes, { InferProps } from 'prop-types';

import Button from './Button';

const styles: { [name: string]: React.CSSProperties } = {
  card: {
    boxShadow:
      '0 2px 1px -1px rgba(0,0,0,0.2), 0 1px 1px 0 rgba(0,0,0,0.14), 0 1px 3px 0 rgba(0,0,0,0.12)',
    transition: 'box-shadow 280ms cubic-bezier(0.4,0,0.2,1)',
    padding: '16px',
    borderRadius: '4px',
    backgroundColor: '#fff',
    color: 'rgba(0,0,0,0.87)',
    fontFamily: "Roboto,'Helvetica Neue',sans-serif",
  },
  cardHeader: {
    display: 'flex',
  },
  cardHeaderAvatar: {
    backgroundSize: 'cover',
    height: '40px',
    width: '40px',
    borderRadius: '50%',
  },
  cardHeaderText: {
    margin: '0 16px',
  },
  cardHeaderTextTitle: {
    marginBottom: '12px',
    fontSize: '20px',
    fontWeight: 500,
  },
  cardHeaderTextSubtitle: {
    marginTop: '-8px',
    marginBottom: '16px',
    color: 'rgba(0,0,0,0.54)',
    fontSize: '14px',
  },
  cardImage: {
    width: 'calc(100% + 32px)',
    margin: '0 -16px 16px -16px',
  },
  cardContent: {
    marginBottom: '16px',
    fontSize: '14px',
  },
  cardContentText: {
    marginTop: 0,
  },
  cardActions: {
    marginLeft: '-8px',
    marginRight: '-8px',
    padding: '8px 0',
  },
};

function Card({
  avatar,
  title,
  subtitle,
  image,
  content,
}: InferProps<typeof Card.propTypes>): JSX.Element {
  return (
    <div style={styles.card}>
      <div style={styles.cardHeader}>
        {avatar && (
          <div style={{ ...styles.cardHeaderAvatar, backgroundImage: `url(${avatar})` }} />
        )}
        {(title || subtitle) && (
          <div style={styles.cardHeaderText}>
            {title && <div style={styles.cardHeaderTextTitle}>{title}</div>}
            {subtitle && <div style={styles.cardHeaderTextSubtitle}>{subtitle}</div>}
          </div>
        )}
      </div>
      {image && <img style={styles.cardImage} src={image} alt={title} />}
      {content && (
        <div style={styles.cardContent}>
          <p style={styles.cardContentText}>{content}</p>
        </div>
      )}
      <div style={styles.cardActions}>
        <Button>LIKE</Button>
        <Button>SHARE</Button>
      </div>
    </div>
  );
}

Card.propTypes = {
  avatar: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

Card.defaultProps = {
  avatar: '',
  title: '',
  subtitle: '',
  image: '',
  content: '',
};

export default Card;
