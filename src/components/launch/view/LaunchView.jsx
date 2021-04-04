import React, { useState, useCallback } from 'react';

import LaunchList from '../list/LaunchList';
import Searchbar from '../../searchbar/Searchbar';
import LaunchDetails from '../details/LaunchDetails';

import './LaunchView.scss';

const LaunchView = () => {
  const [selectedLaunch, setSelectedLaunch] = useState(null);
  const [error, setError] = useState(false);

  const search = useCallback((searchText) => {
    const id = searchText.trim();
    if (id) {
      fetch(`https://api.spacexdata.com/v4/launches/${id}`)
        .then((response) => response.json())
        .then((response) => {
          setSelectedLaunch(response);
          setError(false);
        })
        .catch((error) => {
          setSelectedLaunch({});
          setError(true);
        });
    } else {
      setSelectedLaunch(null);
    }
  }, []);

  return (
    <div className="launch-view">
      <div className="launch-view__searchbar">
        <Searchbar search={search} />
      </div>
      {selectedLaunch && (
        <div className="launch-view__details">
          <LaunchDetails data={selectedLaunch} error={error} />
        </div>
      )}
      <div className="launch-view__list">
        <LaunchList />
      </div>
    </div>
  );
};

export default LaunchView;
