import React from 'react';
import { ImageSourcePropType, TouchableWithoutFeedback } from 'react-native';

import { Container, Option, Title, Img } from './styles';
import items from './items';

interface Props {
  bgColor: string;
  title: string;
  img: ImageSourcePropType;
  actions: any;
}

export const Tips: React.FC = () => {
  return (
    <Container>
      {items.map((item: Props, index: number) => (
        <TouchableWithoutFeedback onPress={item.actions} key={index}>
          <Option bgColor={item.bgColor}>
            <Title>{item.title}</Title>

            <Img source={item.img} />
          </Option>
        </TouchableWithoutFeedback>
      ))}
    </Container>
  );
};
