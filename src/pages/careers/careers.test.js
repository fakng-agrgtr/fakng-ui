import React from 'react';
import { createRoot } from 'react-dom/client';

import Careers from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  createRoot(div).render(<Careers />);
});
