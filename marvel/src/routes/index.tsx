import React, { ReactElement } from 'react';
import { Route, Routes as CRoutes } from 'react-router-dom';
import Characters from './Characters';
import Comics from './Comics';
import { MainLayout } from '../layouts/MainLayout';
import Series from './Series';
import Main from './Main';
import CardsLayout from '../layouts/CardsLayout';
import CharacterDetails from './Characters/CharacterDetails';
import ComicDetails from './Comics/ComicDetails';
import SerieDetails from './Series/SerieDetails/SerieDetails';


function Routes(): ReactElement {
  return (
    <CRoutes>
      <Route path="/" element={<MainLayout />}>
        <Route element={<CardsLayout />}>
          <Route path="characters" element={<Characters />} />
          <Route path="comics" element={<Comics />} />
          <Route path="series" element={<Series />} />
        </Route>
        <Route path="/" element={<Main />} />
        <Route path="characters/:id" element={<CharacterDetails />} />
        <Route path="comics/:id" element={<ComicDetails />} />
        <Route path="series/:id" element={<SerieDetails />} />
      </Route>
    </CRoutes>
  );
}

export default Routes;
