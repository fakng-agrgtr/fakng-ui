import 'src/pages/careers/Careers.scss';

import Container from '@mui/material/Container';
import React, { useEffect } from 'react';

// eslint-disable-next-line react/prop-types
export default function Careers({ tabTitle }) {
  useEffect(() => {
    document.title = tabTitle;
  }, [tabTitle]);

  return (
    <Container maxWidth="xl">
      <h1 className="title">Careers page</h1>
    </Container>
  );
}
