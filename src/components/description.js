import React from 'react';

import { useStateValue } from '../state';

export default function Description() {
  const [{ config }] = useStateValue();

  return (
    <>
      Visualizing <b>{`"${config.keyword}"`}</b> trending accross the globe.
    </>
  );
}
