import 'src/pages/careers/Careers.scss';

import Container from '@mui/material/Container';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import Careers from 'src/components/Careers';

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

CareersPage.propTypes = {
  tabTitle: PropTypes.string,
};

CareersPage.defaultProps = {
  tabTitle: '',
};
