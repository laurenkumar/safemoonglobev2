import React from 'react';

import Button from './button';
import Fade from './fade';
import Link from './link';

export default function About({ onHide, show }) {
  return (
    <Fade className="about" show={show}>
      <div className="about-content">
        <h2>About</h2>
        <p>
          This is a project made to help me learn to code, get a job and possibly change my life.
          Built as a{' '}
          <Link link="JAMSTACK">JAMstack</Link> application without any
          server components. Data is fetched during build time using the{' '}
          <Link link="GOOGLE_TRENDS_API">google-trends-api</Link> library. Globe
          visualizations are rendered using the{' '}
          <Link link="REACT_GLOBE_GITHUB">react-globe</Link> component.
        </p>
        <p>
          This project is inspired by the wonderful{' '}
          <Link link="https://safemoon.net">#safemoon</Link> project. With most of
          interactive features supported by{' '}
          <Link link="REACT_GLOBE_GITHUB">react-globe</Link>, the project aims
          to simplify building beautiful globe visualizations with Google Trends
          datasets.
        </p>
        <p>
          If you want to give me a tip, here is my Safemoon tip jar: 0xCc91E29Cd39e620cf4e84c1D036cE0A97c584e34
        </p>
        <Button label="Back" onClick={onHide} />
      </div>
    </Fade>
  );
}
