import React from 'react';
import { Feather, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import {
  Container,
  Header,
  Title,
  Card,
  CardHeader,
  Menina,
  Description,
  Bold,
  CardBody,
  UserName,
  CardFooter,
  Details,
  Value,
  Divider,
  Date,
  Actions,
  Option,
  OptionLabel,
} from './styles';

import perfil from '../../images/perfil.png';

export const Activities: React.FC = () => {
  return (
    <Container>
      <Header>
        <Title>Noticies</Title>
      </Header>

      <Card>
        <CardHeader>
          <Menina source={perfil} />
          <Description>
            <Bold>Barcelona</Bold> fechou contrato {'\n'} com
            <Bold> Luiz Lima</Bold>
          </Description>
        </CardHeader>

        <CardBody>
          <UserName>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil,
            quae odio. Debitis praesentium nam v
          </UserName>
        </CardBody>

        <CardFooter>
          <Details>
            <Value>Em Alta</Value>

            <Divider />

            <Feather name="circle" color="#fff" size={14} />
            <Date>Há 2 dias</Date>
          </Details>

          <Actions>
            <Option>
              <MaterialCommunityIcons
                name="comment-outline"
                size={14}
                color="#fff"
              />
              <OptionLabel>0</OptionLabel>
            </Option>

            <Option>
              <AntDesign name="hearto" size={14} color="#fff" />
              <OptionLabel>0</OptionLabel>
            </Option>
          </Actions>
        </CardFooter>
      </Card>
    </Container>
  );
};
