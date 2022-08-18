import React from 'react';
import { createRoot } from 'react-dom/client';

import Home from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  createRoot(div).render(<Home />);
});
