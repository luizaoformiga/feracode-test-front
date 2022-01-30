import React from 'react';
import { ImageSourcePropType } from 'react-native';

import { Container, Option, Img, Label } from './styles/styles';
import items from './items';

interface Props {
  key: string;
  img: ImageSourcePropType;
  label: string;
}

export const Suggestion: React.FC = () => {
  return (
    <Container>
      {items.map((item: Props) => (
        <Option key={item.key}>
          <Img source={item.img} />
          <Label>{item.label}</Label>
        </Option>
      ))}
    </Container>
  );
}
