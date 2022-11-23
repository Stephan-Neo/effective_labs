import React, { ReactElement } from 'react';
import { Route, Routes as CRoutes } from 'react-router-dom';
import Characters from './Characters';
import Comics from './Comics';
import { MainLayout } from '../layouts/MainLayout';
import Series from './Series';
import Main from './Main';
import CardsLayout from '../layouts/CardsLayout';

function Routes(): ReactElement {
  return (
    <CRoutes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Main />} />
        <Route element={<CardsLayout />}>
          <Route path="characters" element={<Characters />} />
          <Route path="comics" element={<Comics />} />
          <Route path="series" element={<Series />} />
        </Route>
      </Route>
    </CRoutes>
  );
}

export default Routes;
