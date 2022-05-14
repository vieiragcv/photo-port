import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Gallery from '..';

afterEach(cleanup);

describe('Gallery component', () => {

  //TEST 1
  it('renders', () => {
    render(<Gallery />);
  });

  //TEST 2
  
});
