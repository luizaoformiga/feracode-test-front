import React from 'react';
import { Container, Details, Img, Title, Description } from './styles/styles';
import img13 from '../../images/13.png';

export const Banner: React.FC = () => {
  return (
    <Container>
      <Details>
        <Title>Veja notícias do seu time de coração</Title>

        <Description>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, culpa,
          id assumenda ad molestiae dolorem quo
        </Description>
      </Details>

      <Img source={img13} />
    </Container>
  );
}
