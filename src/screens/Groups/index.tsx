import React, {useState} from 'react';
import {FlatList} from 'react-native';

import {Button} from '@components/Button';
import GroupCard from '@components/GroupCard';
import Header from '@components/Header';
import HighLight from '@components/HighLight';
import {ListEmpty} from '@components/ListEmpty';
import {Container} from './styles';

export default function Groups() {
  const [groups, setGroups] = useState<string[]>(['Turma do Pagode']);

  return (
    <Container>
      <Header />
      <HighLight title="Turmas" subtitle="Jogue com a sua turma" />

      <FlatList
        data={groups}
        keyExtractor={item => item}
        renderItem={({item}) => <GroupCard title={item} />}
        contentContainerStyle={{
          flex: 1,
        }}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira turma?" />
        )}
      />

      <Button title="Criar nova turma" />
    </Container>
  );
}
