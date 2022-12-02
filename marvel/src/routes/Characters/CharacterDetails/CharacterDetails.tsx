import React, { ReactElement, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import charactersStore from '../../../stores/CharactersStore';
import Details from '../../../components/Details/Details';

function CharacterDetails(): ReactElement {
  const { id } = useParams();
  useEffect(() => {
    charactersStore?.getCharacter(Number(id));
  }, []);

  return (
    <>
      {charactersStore.character.map((data) => (
        <Details {...data} />
      ))}
    </>
  );
}

export default observer(CharacterDetails);
