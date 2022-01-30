import React, { useState } from 'react';
import {
  MaterialCommunityIcons,
  FontAwesome,
  AntDesign,
} from '@expo/vector-icons';
import { Switch } from 'react-native';

import {
  Wrapper,
  Header,
  HeaderContainer,
  Title,
  BalanceContainer,
  Value,
  Info,
  Actions,
  Action,
  ActionLabel,
  UseBalance,
  UseBalanceTitle,
  PaymentMethods,
  PaymentMethodsTitle,
  Card,
  CardBody,
  CardDetails,
  CardTitle,
  CardInfo,
  Img,
  AddButtoon,
  AddLabel,
  UseTicketContainer,
  UseTicketButton,
  UseTicketLabel,
} from './styles/styles';

import creditCard from '../../images/credit-card.png';
import { Container } from '../Home/styles/styles';

export const Wallet: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [useBalance, setUseBalance] = useState<boolean>(true);

  const handleToggleVisibility = (): void => {
    return setIsVisible((prevState) => !prevState);
  };

  const handleToggleUseBalance = (): void => {
    return setUseBalance((prevState) => !prevState);
  };

  return (
    <Wrapper>
      <Container>
        <Header
          colors={useBalance ? ['#F57005', '#F57005'] : ['#d3d3d3', '#868686']}
        >
          <HeaderContainer>
            <Title>My Profile</Title>

            <BalanceContainer>
              <Value>Luiz Lima</Value>
            </BalanceContainer>

            {/**<Info>Seu saldo está rendendo 100% do CDI</Info> */}

            <Actions>
              <Action>
                {/**icone */}
                <ActionLabel>Adicionar</ActionLabel>
              </Action>

              <Action>
                {/**icone */}
                <ActionLabel>Retirar</ActionLabel>
              </Action>
            </Actions>
          </HeaderContainer>
        </Header>

        <PaymentMethods>
          <PaymentMethodsTitle>Acompanhe o seu time</PaymentMethodsTitle>

          <Card>
            <CardBody>
              <CardDetails>
                <CardTitle>Veja os destaques da semana</CardTitle>

                <CardInfo>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Aperi ab voluptate.
                </CardInfo>
              </CardDetails>

              <Img source={creditCard} resizeMode="contain" />
            </CardBody>

            <AddButtoon>
              <AntDesign name="pluscircleo" size={30} color="#00a0b8" />
              <AddLabel>Marcar como torcedor VIP</AddLabel>
            </AddButtoon>
          </Card>

          <UseTicketContainer>
            <UseTicketButton>
              <MaterialCommunityIcons
                name="ticket-outline"
                size={20}
                color="#0db060"
              />
              <UseTicketLabel>Usar código promocional</UseTicketLabel>
            </UseTicketButton>
          </UseTicketContainer>
        </PaymentMethods>
      </Container>
    </Wrapper>
  );
};
