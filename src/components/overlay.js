import moment from 'moment';
import React, { useState } from 'react';

import { useStateValue } from '../state';
import About from './about';
import Description from './description';
import Fade from './fade';
import Link from './link';

export default function Overlay() {
  const [
    { focusedMarker, lastUpdated, markers, start },
    dispatch,
  ] = useStateValue();
  const [showAbout, setShowAbout] = useState(false);

  const showOverlay = start && !showAbout && !focusedMarker;

  return (
    <>
      <About onHide={() => setShowAbout(false)} show={showAbout} />
      <Fade className="overlay" show={showOverlay}>
        <div className="header">
          <div>
            <h2>Safemoon Trending</h2>
            <div className="overlay-subtitle">
              <Description />
            </div>
          </div>
          <div>
            <Link className="nudge-right" onClick={() => setShowAbout(true)}>
              About
            </Link>
          </div>
        </div>
        <div className="content">
          TOP 5 SEARCHING CITIES
          {markers.slice(0, 5).map((marker) => (
            <Link key={marker.city}>
              <h2 onClick={() => dispatch({ type: 'FOCUS', payload: marker })}>
                {marker.city} ({marker.value})
              </h2>
            </Link>
          ))}
        </div>
        <div className="footer">
          Updated on {moment(lastUpdated).format('MMM D, YYYY')}
        </div>
      </Fade>
    </>
  );
}
