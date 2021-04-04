import React, { useState, useEffect } from 'react';
import * as moment from 'moment';

import './LaunchDetails.scss';

const LaunchDetails = ({ data: { id, name, date_unix, success }, error }) => {
  const [timeElapsed, setTimeElapsed] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      const diff = moment.duration(moment().diff(moment(date_unix * 1000)));
      const { days, hours, minutes, seconds } = diff._data;
      setTimeElapsed(
        `${days} Day(s) ${hours} Hour(s) ${minutes} minute(s) ${seconds} second(s).`
      );
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [date_unix]);

  return (
    <div className="launch-details">
      <div className="launch-details__title">Search Result</div>
      {error ? (
        <div className="launch-details__error">Launch could not be found!</div>
      ) : (
        <div className="launch-details__launch">
          <div className="launch__name">{name}</div>
          <div
            className={`launch__indicator launch__indicator--${
              success ? 'success' : 'failure'
            }`}
          ></div>
          <div className="launch__time-elapsed">
            <div className="time-elapsed__label">Elapsed time since launch</div>
            <div className="time-elapsed__value">{timeElapsed}</div>
          </div>
          <div className="launch__id">{id}</div>
        </div>
      )}
    </div>
  );
};

export default LaunchDetails;
