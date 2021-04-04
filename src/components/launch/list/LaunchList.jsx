import React, { useState, useEffect } from 'react';

import LaunchCard from '../card/LaunchCard';

import './LaunchList.scss';

const QUERY_OPTIONS = {
  query: { upcoming: false },
  options: { limit: 3, select: 'id name', sort: { date_unix: 'desc' } },
};

const LaunchList = () => {
  const [pastLaunches, setPastLaunches] = useState([]);

  useEffect(() => {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    fetch('https://api.spacexdata.com/v4/launches/query', {
      headers,
      method: 'POST',
      body: JSON.stringify(QUERY_OPTIONS),
    })
      .then((response) => response.json())
      .then((response) => setPastLaunches(response.docs))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="launch-list">
      <div className="launch-list__title">Past Launches</div>
      <div className="launch-list__content">
        {pastLaunches.length > 0
          ? pastLaunches.map((launch, index) => (
              <div className="launch-list__launch" key={`launch-${index}`}>
                <LaunchCard data={launch} />
              </div>
            ))
          : 'No Data Available'}
      </div>
    </div>
  );
};

export default LaunchList;
