import React, { ReactElement } from 'react';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import CharactersStore from '../../../stores/CharactersStore';
import Details from '../../../components/Details/Details';
import { Side } from '../../../types/side';

function CharacterDetails(): ReactElement {
  const { id } = useParams();

  const character: Side = CharactersStore.getCharacter(id || '')[0];

  return <Details {...character} />;
}

export default observer(CharacterDetails);
