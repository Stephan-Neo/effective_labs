import React, { ReactElement, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import charactersStore from '../../stores/CharactersStore';
import Card from '../../components/Card';

function Characters(): ReactElement {
  useEffect(() => {
    charactersStore?.getCharacters();
  }, []);
  return (
    <>
      {charactersStore.characters.map((data) => (
        <Card {...data} />
      ))}
    </>
  );
}

export default observer(Characters);
