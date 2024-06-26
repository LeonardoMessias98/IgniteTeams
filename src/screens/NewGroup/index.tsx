import {Button} from '@components/Button';
import Header from '@components/Header';
import HighLight from '@components/HighLight';
import {Input} from '@components/Input';
import React from 'react';
import {Container, Content, Icon} from './styles';

export const NewGroup = () => {
  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />

        <HighLight
          title="Nova turma"
          subtitle="crie a turma para adicionar as pessoas"
        />

        <Input placeholder="Nome da turma" />

        <Button title="Criar" style={{marginTop: 20}} />
      </Content>
    </Container>
  );
};
