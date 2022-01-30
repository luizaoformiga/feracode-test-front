import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import { StyleSheet, Button } from 'react-native';

import {
  Wrapper,
  Container,
  Header,
  BalanceContainer,
  BalanceTitle,
  Balance,
  SearchHeader,
  SearchInput,
} from './styles/styles';
import { Activities, Tips, Banner } from '../../components';

export const Home: React.FC = () => {
  const onPress: any = [];

  return (
    <Wrapper>
      <Container>
        <Header>
          <BalanceContainer>
            <BalanceTitle>Wellcome</BalanceTitle>
            <Balance>Luiz Lima</Balance>
          </BalanceContainer>

            <Button title='Search' onPress={onPress} />
        </Header>

        <Tips />
        <Activities />
        <Banner />
      </Container>
    </Wrapper>
  );
};
