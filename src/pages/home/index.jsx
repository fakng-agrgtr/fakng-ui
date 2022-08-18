import 'src/pages/home/Home.scss';

import React, { useEffect } from 'react';

// eslint-disable-next-line react/prop-types
export default function Home({ tabTitle }) {
  useEffect(() => {
    document.title = tabTitle;
  }, [tabTitle]);

  return (
    <div>
      <h1 className="title">Home page</h1>
    </div>
  );
}
