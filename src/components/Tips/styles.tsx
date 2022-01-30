import { RefAttributes } from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Interpolation, ThemedStyledProps } from 'styled-components';
import styled, { DefaultTheme } from 'styled-components/native';

interface BgColorProps {
  bgColor: Interpolation<
    ThemedStyledProps<
      TouchableOpacityProps & RefAttributes<TouchableOpacity>,
      DefaultTheme
    >
  >;
}

export const Container = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingLeft: 16,
  },
}))`
  margin-top: 25px;
`;

export const Option = styled.TouchableOpacity`
  background: ${({ bgColor }: BgColorProps) => bgColor};
  width: 160px;
  height: 200px;
  border-radius: 8px;
  padding: 15px;
  justify-content: space-between;
  margin-right: 16px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export const Img = styled.Image`
  align-self: center;
`;
