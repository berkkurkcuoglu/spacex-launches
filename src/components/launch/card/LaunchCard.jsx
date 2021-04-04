import React from 'react';

import './LaunchCard.scss';

const LaunchCard = ({ data: { id, name } }) => {
  return (
    <div className="launch-card">
      <div className="launch-card__name">{name}</div>
      <div className="launch-card__id">{id}</div>
    </div>
  );
};

export default LaunchCard;
