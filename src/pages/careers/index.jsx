import 'src/pages/careers/Careers.scss';

import Container from '@mui/material/Container';
import React, { useEffect } from 'react';
import Careers from 'src/components/Careers';

// eslint-disable-next-line react/prop-types
export default function CareersPage({ tabTitle }) {
  useEffect(() => {
    document.title = tabTitle;
  }, [tabTitle]);

  return (
    <Container maxWidth="xl">
      <Careers />
    </Container>
  );
}
