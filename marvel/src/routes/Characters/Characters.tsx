import React, { ReactElement } from 'react';
import CharactersStore from '../../stores/CharactersStore';
import Card from '../../components/Card';

function Characters(): ReactElement {
  return (
    <>
      {CharactersStore.characters.map((character) => (
        <Card {...character} />
      ))}
    </>
  );
}

export default Characters;
