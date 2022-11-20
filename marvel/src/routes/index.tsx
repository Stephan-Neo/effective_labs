import React, { ReactElement } from 'react';
import { Route, Routes as CRoutes } from 'react-router-dom';
import Characters from './Characters';
import Comics from './Comics';
import { MainLayout } from '../layouts/MainLayout';
import Series from './Series';

function Routes(): ReactElement {
  return (
    <CRoutes>
      <Route path="/" element={<MainLayout />}>
        <Route path="characters" element={<Characters />} />
        <Route path="comics" element={<Comics />} />
        <Route path="series" element={<Series />} />
      </Route>
    </CRoutes>
  );
}

export default Routes;
